/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ start: NonNullable<unknown>, end: NonNullable<unknown> }} Emails_Notify_Creator_IntroInputs */

const en_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Stats for your mods from ${i?.start} to ${i?.end}.`)
};

const es_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Estadísticas de tus mods del ${i?.start} al ${i?.end}.`)
};

const de_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Statistiken deiner Mods vom ${i?.start} bis ${i?.end}.`)
};

const fr_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Statistiques de vos mods du ${i?.start} au ${i?.end}.`)
};

const it_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Statistiche dei tuoi mod dal ${i?.start} al ${i?.end}.`)
};

const nl_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Statistieken van je mods van ${i?.start} tot ${i?.end}.`)
};

const pl_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Statystyki Twoich modów od ${i?.start} do ${i?.end}.`)
};

const pt_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Estatísticas dos seus mods de ${i?.start} a ${i?.end}.`)
};

const ru_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Статистика ваших модов с ${i?.start} по ${i?.end}.`)
};

const sv_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Statistik för dina moddar från ${i?.start} till ${i?.end}.`)
};

const tr_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modlarının ${i?.start} - ${i?.end} arasındaki istatistikleri.`)
};

const zh_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你的模组在 ${i?.start} 至 ${i?.end} 的数据。`)
};

const ja_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.start}〜${i?.end} のあなたの MOD の統計です。`)
};

/**
* | output |
* | --- |
* | "Stats for your mods from {start} to {end}." |
*
* @param {Emails_Notify_Creator_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_creator_intro = /** @type {((inputs: Emails_Notify_Creator_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Creator_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_creator_intro(inputs)
	if (locale === "de") return de_emails_notify_creator_intro(inputs)
	if (locale === "fr") return fr_emails_notify_creator_intro(inputs)
	if (locale === "it") return it_emails_notify_creator_intro(inputs)
	if (locale === "nl") return nl_emails_notify_creator_intro(inputs)
	if (locale === "pl") return pl_emails_notify_creator_intro(inputs)
	if (locale === "pt") return pt_emails_notify_creator_intro(inputs)
	if (locale === "ru") return ru_emails_notify_creator_intro(inputs)
	if (locale === "sv") return sv_emails_notify_creator_intro(inputs)
	if (locale === "tr") return tr_emails_notify_creator_intro(inputs)
	if (locale === "zh") return zh_emails_notify_creator_intro(inputs)
	if (locale === "ja") return ja_emails_notify_creator_intro(inputs)
	return en_emails_notify_creator_intro(inputs)
});
