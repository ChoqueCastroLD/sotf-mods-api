/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_ThanksInputs */

const en_social_compat_thanks = /** @type {(inputs: Social_Compat_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thanks, survivor! Your field report counts toward the compatibility badge.`)
};

const es_social_compat_thanks = /** @type {(inputs: Social_Compat_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¡Gracias, superviviente! Tu reporte de campo cuenta para la insignia de compatibilidad.`)
};

const de_social_compat_thanks = /** @type {(inputs: Social_Compat_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Danke, Überlebender! Dein Feldbericht zählt für das Kompatibilitätsabzeichen.`)
};

const fr_social_compat_thanks = /** @type {(inputs: Social_Compat_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Merci, survivant ! Votre rapport de terrain compte pour le badge de compatibilité.`)
};

const it_social_compat_thanks = /** @type {(inputs: Social_Compat_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grazie, sopravvissuto! Il tuo rapporto sul campo conta per il badge di compatibilità.`)
};

const nl_social_compat_thanks = /** @type {(inputs: Social_Compat_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bedankt, overlever! Je veldrapport telt mee voor de compatibiliteitsbadge.`)
};

const pl_social_compat_thanks = /** @type {(inputs: Social_Compat_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dzięki, ocalały! Twój raport terenowy liczy się do odznaki zgodności.`)
};

const pt_social_compat_thanks = /** @type {(inputs: Social_Compat_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valeu, sobrevivente! Seu relatório de campo conta para o selo de compatibilidade.`)
};

const ru_social_compat_thanks = /** @type {(inputs: Social_Compat_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Спасибо, выживший! Ваш полевой отчёт учтён в значке совместимости.`)
};

const sv_social_compat_thanks = /** @type {(inputs: Social_Compat_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tack, överlevare! Din fältrapport räknas in i kompatibilitetsmärket.`)
};

const tr_social_compat_thanks = /** @type {(inputs: Social_Compat_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teşekkürler! Saha raporun uyumluluk rozetine sayılır.`)
};

const zh_social_compat_thanks = /** @type {(inputs: Social_Compat_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`谢谢你，幸存者！你的实地报告会计入兼容性徽章。`)
};

const ja_social_compat_thanks = /** @type {(inputs: Social_Compat_ThanksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ありがとう、サバイバー！あなたのフィールドレポートは互換性バッジに反映されます。`)
};

/**
* | output |
* | --- |
* | "Thanks, survivor! Your field report counts toward the compatibility badge." |
*
* @param {Social_Compat_ThanksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_thanks = /** @type {((inputs?: Social_Compat_ThanksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_ThanksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_thanks(inputs)
	if (locale === "de") return de_social_compat_thanks(inputs)
	if (locale === "fr") return fr_social_compat_thanks(inputs)
	if (locale === "it") return it_social_compat_thanks(inputs)
	if (locale === "nl") return nl_social_compat_thanks(inputs)
	if (locale === "pl") return pl_social_compat_thanks(inputs)
	if (locale === "pt") return pt_social_compat_thanks(inputs)
	if (locale === "ru") return ru_social_compat_thanks(inputs)
	if (locale === "sv") return sv_social_compat_thanks(inputs)
	if (locale === "tr") return tr_social_compat_thanks(inputs)
	if (locale === "zh") return zh_social_compat_thanks(inputs)
	if (locale === "ja") return ja_social_compat_thanks(inputs)
	return en_social_compat_thanks(inputs)
});
