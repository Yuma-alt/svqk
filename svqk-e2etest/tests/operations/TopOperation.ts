import { Page } from '@playwright/test';
import TopPage from '../pages/TopPage';
import { DryRun } from '../arch/DryRun';

export default class TopOperation {
  private topPage: TopPage;
  constructor(page: Page, dryRun: DryRun) {
    this.topPage = new TopPage(page, dryRun);
  }

  async openTopPage() {
    await this.topPage.open();
  }

  async gotoIssueListPage() {
    await this.topPage.clickIssueLink();
  }
}
