/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_End_NowInputs */

const en_admin_ann_end_now = /** @type {(inputs: Admin_Ann_End_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`End now`)
};

const es_admin_ann_end_now = /** @type {(inputs: Admin_Ann_End_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terminar ahora`)
};

const de_admin_ann_end_now = /** @type {(inputs: Admin_Ann_End_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jetzt beenden`)
};

const fr_admin_ann_end_now = /** @type {(inputs: Admin_Ann_End_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terminer maintenant`)
};

const it_admin_ann_end_now = /** @type {(inputs: Admin_Ann_End_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Termina ora`)
};

const nl_admin_ann_end_now = /** @type {(inputs: Admin_Ann_End_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nu beëindigen`)
};

const pl_admin_ann_end_now = /** @type {(inputs: Admin_Ann_End_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zakończ teraz`)
};

const pt_admin_ann_end_now = /** @type {(inputs: Admin_Ann_End_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Encerrar agora`)
};

const ru_admin_ann_end_now = /** @type {(inputs: Admin_Ann_End_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Завершить сейчас`)
};

const sv_admin_ann_end_now = /** @type {(inputs: Admin_Ann_End_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avsluta nu`)
};

const tr_admin_ann_end_now = /** @type {(inputs: Admin_Ann_End_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şimdi bitir`)
};

const zh_admin_ann_end_now = /** @type {(inputs: Admin_Ann_End_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`立即结束`)
};

const ja_admin_ann_end_now = /** @type {(inputs: Admin_Ann_End_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今すぐ終了`)
};

/**
* | output |
* | --- |
* | "End now" |
*
* @param {Admin_Ann_End_NowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_end_now = /** @type {((inputs?: Admin_Ann_End_NowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_End_NowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_end_now(inputs)
	if (locale === "de") return de_admin_ann_end_now(inputs)
	if (locale === "fr") return fr_admin_ann_end_now(inputs)
	if (locale === "it") return it_admin_ann_end_now(inputs)
	if (locale === "nl") return nl_admin_ann_end_now(inputs)
	if (locale === "pl") return pl_admin_ann_end_now(inputs)
	if (locale === "pt") return pt_admin_ann_end_now(inputs)
	if (locale === "ru") return ru_admin_ann_end_now(inputs)
	if (locale === "sv") return sv_admin_ann_end_now(inputs)
	if (locale === "tr") return tr_admin_ann_end_now(inputs)
	if (locale === "zh") return zh_admin_ann_end_now(inputs)
	if (locale === "ja") return ja_admin_ann_end_now(inputs)
	return en_admin_ann_end_now(inputs)
});
