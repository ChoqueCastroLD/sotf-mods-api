/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Reports_DescriptionInputs */

const en_ranger_reports_description = /** @type {(inputs: Ranger_Reports_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What the community flagged, with the reason and the evidence. Closing a report notifies whoever sent it.`)
};

const es_ranger_reports_description = /** @type {(inputs: Ranger_Reports_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lo que ha señalado la comunidad, con el motivo y las pruebas. Al cerrar un reporte se avisa a quien lo envió.`)
};

const de_ranger_reports_description = /** @type {(inputs: Ranger_Reports_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was die Community gemeldet hat, mit Grund und Belegen. Beim Schließen einer Meldung wird der Absender benachrichtigt.`)
};

const fr_ranger_reports_description = /** @type {(inputs: Ranger_Reports_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce que la communauté a signalé, avec le motif et les preuves. Fermer un signalement prévient son auteur.`)
};

const it_ranger_reports_description = /** @type {(inputs: Ranger_Reports_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ciò che la community ha segnalato, con motivo e prove. Chiudere una segnalazione avvisa chi l’ha inviata.`)
};

const nl_ranger_reports_description = /** @type {(inputs: Ranger_Reports_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat de community heeft gemeld, met de reden en het bewijs. Bij het sluiten van een melding krijgt de melder bericht.`)
};

const pl_ranger_reports_description = /** @type {(inputs: Ranger_Reports_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To, co zgłosiła społeczność, z powodem i dowodami. Zamknięcie zgłoszenia powiadamia jego autora.`)
};

const pt_ranger_reports_description = /** @type {(inputs: Ranger_Reports_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que a comunidade denunciou, com o motivo e as provas. Fechar uma denúncia avisa quem a enviou.`)
};

const ru_ranger_reports_description = /** @type {(inputs: Ranger_Reports_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`То, на что пожаловалось сообщество, с причиной и доказательствами. При закрытии жалобы отправитель получает уведомление.`)
};

const sv_ranger_reports_description = /** @type {(inputs: Ranger_Reports_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det communityn har anmält, med orsak och bevis. När en anmälan stängs meddelas den som skickade den.`)
};

const tr_ranger_reports_description = /** @type {(inputs: Ranger_Reports_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Topluluğun işaretlediği içerikler, gerekçe ve kanıtlarıyla. Bir şikâyet kapatılınca gönderen bilgilendirilir.`)
};

const zh_ranger_reports_description = /** @type {(inputs: Ranger_Reports_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`社区标记的内容，附原因和证据。关闭举报时会通知举报人。`)
};

const ja_ranger_reports_description = /** @type {(inputs: Ranger_Reports_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コミュニティが報告した内容を、理由と証拠とともに表示します。報告を閉じると送信者に通知されます。`)
};

/**
* | output |
* | --- |
* | "What the community flagged, with the reason and the evidence. Closing a report notifies whoever sent it." |
*
* @param {Ranger_Reports_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_reports_description = /** @type {((inputs?: Ranger_Reports_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Reports_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_reports_description(inputs)
	if (locale === "de") return de_ranger_reports_description(inputs)
	if (locale === "fr") return fr_ranger_reports_description(inputs)
	if (locale === "it") return it_ranger_reports_description(inputs)
	if (locale === "nl") return nl_ranger_reports_description(inputs)
	if (locale === "pl") return pl_ranger_reports_description(inputs)
	if (locale === "pt") return pt_ranger_reports_description(inputs)
	if (locale === "ru") return ru_ranger_reports_description(inputs)
	if (locale === "sv") return sv_ranger_reports_description(inputs)
	if (locale === "tr") return tr_ranger_reports_description(inputs)
	if (locale === "zh") return zh_ranger_reports_description(inputs)
	if (locale === "ja") return ja_ranger_reports_description(inputs)
	return en_ranger_reports_description(inputs)
});
