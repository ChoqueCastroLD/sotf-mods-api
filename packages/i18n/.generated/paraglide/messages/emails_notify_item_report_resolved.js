/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ action: NonNullable<unknown> }} Emails_Notify_Item_Report_ResolvedInputs */

const en_emails_notify_item_report_resolved = /** @type {(inputs: Emails_Notify_Item_Report_ResolvedInputs) => LocalizedString} */ (i) => {
	if (i?.action === "resolve") return /** @type {LocalizedString} */ (`Your report was reviewed and the moderators took action`);
	return /** @type {LocalizedString} */ (`Your report was reviewed: no action was needed`)
	
};

const es_emails_notify_item_report_resolved = /** @type {(inputs: Emails_Notify_Item_Report_ResolvedInputs) => LocalizedString} */ (i) => {
	if (i?.action === "resolve") return /** @type {LocalizedString} */ (`Revisamos tu reporte y los moderadores tomaron medidas`);
	return /** @type {LocalizedString} */ (`Revisamos tu reporte: no hizo falta ninguna medida`)
	
};

const de_emails_notify_item_report_resolved = /** @type {(inputs: Emails_Notify_Item_Report_ResolvedInputs) => LocalizedString} */ (i) => {
	if (i?.action === "resolve") return /** @type {LocalizedString} */ (`Deine Meldung wurde geprüft und die Moderation hat gehandelt`);
	return /** @type {LocalizedString} */ (`Deine Meldung wurde geprüft: Es war nichts zu tun`)
	
};

const fr_emails_notify_item_report_resolved = /** @type {(inputs: Emails_Notify_Item_Report_ResolvedInputs) => LocalizedString} */ (i) => {
	if (i?.action === "resolve") return /** @type {LocalizedString} */ (`Votre signalement a été examiné et la modération a agi`);
	return /** @type {LocalizedString} */ (`Votre signalement a été examiné : aucune action n’était nécessaire`)
	
};

const it_emails_notify_item_report_resolved = /** @type {(inputs: Emails_Notify_Item_Report_ResolvedInputs) => LocalizedString} */ (i) => {
	if (i?.action === "resolve") return /** @type {LocalizedString} */ (`La tua segnalazione è stata esaminata e i moderatori sono intervenuti`);
	return /** @type {LocalizedString} */ (`La tua segnalazione è stata esaminata: non è servito alcun intervento`)
	
};

const nl_emails_notify_item_report_resolved = /** @type {(inputs: Emails_Notify_Item_Report_ResolvedInputs) => LocalizedString} */ (i) => {
	if (i?.action === "resolve") return /** @type {LocalizedString} */ (`Je melding is bekeken en de moderators hebben actie ondernomen`);
	return /** @type {LocalizedString} */ (`Je melding is bekeken: er was geen actie nodig`)
	
};

const pl_emails_notify_item_report_resolved = /** @type {(inputs: Emails_Notify_Item_Report_ResolvedInputs) => LocalizedString} */ (i) => {
	if (i?.action === "resolve") return /** @type {LocalizedString} */ (`Twoje zgłoszenie zostało rozpatrzone i moderatorzy podjęli działania`);
	return /** @type {LocalizedString} */ (`Twoje zgłoszenie zostało rozpatrzone: nie trzeba było nic robić`)
	
};

const pt_emails_notify_item_report_resolved = /** @type {(inputs: Emails_Notify_Item_Report_ResolvedInputs) => LocalizedString} */ (i) => {
	if (i?.action === "resolve") return /** @type {LocalizedString} */ (`Sua denúncia foi analisada e os moderadores tomaram providências`);
	return /** @type {LocalizedString} */ (`Sua denúncia foi analisada: nenhuma ação foi necessária`)
	
};

const ru_emails_notify_item_report_resolved = /** @type {(inputs: Emails_Notify_Item_Report_ResolvedInputs) => LocalizedString} */ (i) => {
	if (i?.action === "resolve") return /** @type {LocalizedString} */ (`Ваша жалоба рассмотрена, модераторы приняли меры`);
	return /** @type {LocalizedString} */ (`Ваша жалоба рассмотрена: меры не потребовались`)
	
};

const sv_emails_notify_item_report_resolved = /** @type {(inputs: Emails_Notify_Item_Report_ResolvedInputs) => LocalizedString} */ (i) => {
	if (i?.action === "resolve") return /** @type {LocalizedString} */ (`Din anmälan har granskats och moderatorerna har vidtagit åtgärder`);
	return /** @type {LocalizedString} */ (`Din anmälan har granskats: inga åtgärder behövdes`)
	
};

const tr_emails_notify_item_report_resolved = /** @type {(inputs: Emails_Notify_Item_Report_ResolvedInputs) => LocalizedString} */ (i) => {
	if (i?.action === "resolve") return /** @type {LocalizedString} */ (`Bildirimin incelendi ve moderatörler gereğini yaptı`);
	return /** @type {LocalizedString} */ (`Bildirimin incelendi: herhangi bir işlem gerekmedi`)
	
};

const zh_emails_notify_item_report_resolved = /** @type {(inputs: Emails_Notify_Item_Report_ResolvedInputs) => LocalizedString} */ (i) => {
	if (i?.action === "resolve") return /** @type {LocalizedString} */ (`你的举报已审核，版主已采取措施`);
	return /** @type {LocalizedString} */ (`你的举报已审核：无需采取措施`)
	
};

const ja_emails_notify_item_report_resolved = /** @type {(inputs: Emails_Notify_Item_Report_ResolvedInputs) => LocalizedString} */ (i) => {
	if (i?.action === "resolve") return /** @type {LocalizedString} */ (`あなたの通報は確認され、モデレーターが対応しました`);
	return /** @type {LocalizedString} */ (`あなたの通報は確認されました：対応は不要でした`)
	
};

/**
* | action | output |
* | --- | --- |
* | "resolve" | "Your report was reviewed and the moderators took action" |
* | * | "Your report was reviewed: no action was needed" |
*
* @param {Emails_Notify_Item_Report_ResolvedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_report_resolved = /** @type {((inputs: Emails_Notify_Item_Report_ResolvedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Report_ResolvedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_report_resolved(inputs)
	if (locale === "de") return de_emails_notify_item_report_resolved(inputs)
	if (locale === "fr") return fr_emails_notify_item_report_resolved(inputs)
	if (locale === "it") return it_emails_notify_item_report_resolved(inputs)
	if (locale === "nl") return nl_emails_notify_item_report_resolved(inputs)
	if (locale === "pl") return pl_emails_notify_item_report_resolved(inputs)
	if (locale === "pt") return pt_emails_notify_item_report_resolved(inputs)
	if (locale === "ru") return ru_emails_notify_item_report_resolved(inputs)
	if (locale === "sv") return sv_emails_notify_item_report_resolved(inputs)
	if (locale === "tr") return tr_emails_notify_item_report_resolved(inputs)
	if (locale === "zh") return zh_emails_notify_item_report_resolved(inputs)
	if (locale === "ja") return ja_emails_notify_item_report_resolved(inputs)
	return en_emails_notify_item_report_resolved(inputs)
});
