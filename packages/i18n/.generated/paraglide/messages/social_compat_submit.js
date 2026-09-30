/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_SubmitInputs */

const en_social_compat_submit = /** @type {(inputs: Social_Compat_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send report`)
};

const es_social_compat_submit = /** @type {(inputs: Social_Compat_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar reporte`)
};

const de_social_compat_submit = /** @type {(inputs: Social_Compat_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bericht senden`)
};

const fr_social_compat_submit = /** @type {(inputs: Social_Compat_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyer le rapport`)
};

const it_social_compat_submit = /** @type {(inputs: Social_Compat_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invia rapporto`)
};

const nl_social_compat_submit = /** @type {(inputs: Social_Compat_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapport versturen`)
};

const pl_social_compat_submit = /** @type {(inputs: Social_Compat_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyślij raport`)
};

const pt_social_compat_submit = /** @type {(inputs: Social_Compat_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar relato`)
};

const ru_social_compat_submit = /** @type {(inputs: Social_Compat_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправить отчёт`)
};

const sv_social_compat_submit = /** @type {(inputs: Social_Compat_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skicka rapport`)
};

const tr_social_compat_submit = /** @type {(inputs: Social_Compat_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raporu gönder`)
};

const zh_social_compat_submit = /** @type {(inputs: Social_Compat_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提交报告`)
};

const ja_social_compat_submit = /** @type {(inputs: Social_Compat_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レポートを送信`)
};

/**
* | output |
* | --- |
* | "Send report" |
*
* @param {Social_Compat_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_submit = /** @type {((inputs?: Social_Compat_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_submit(inputs)
	if (locale === "de") return de_social_compat_submit(inputs)
	if (locale === "fr") return fr_social_compat_submit(inputs)
	if (locale === "it") return it_social_compat_submit(inputs)
	if (locale === "nl") return nl_social_compat_submit(inputs)
	if (locale === "pl") return pl_social_compat_submit(inputs)
	if (locale === "pt") return pt_social_compat_submit(inputs)
	if (locale === "ru") return ru_social_compat_submit(inputs)
	if (locale === "sv") return sv_social_compat_submit(inputs)
	if (locale === "tr") return tr_social_compat_submit(inputs)
	if (locale === "zh") return zh_social_compat_submit(inputs)
	if (locale === "ja") return ja_social_compat_submit(inputs)
	return en_social_compat_submit(inputs)
});
