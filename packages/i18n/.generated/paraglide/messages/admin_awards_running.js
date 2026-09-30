/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_RunningInputs */

const en_admin_awards_running = /** @type {(inputs: Admin_Awards_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Now`)
};

const es_admin_awards_running = /** @type {(inputs: Admin_Awards_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ahora`)
};

const de_admin_awards_running = /** @type {(inputs: Admin_Awards_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktuell`)
};

const fr_admin_awards_running = /** @type {(inputs: Admin_Awards_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En cours`)
};

const it_admin_awards_running = /** @type {(inputs: Admin_Awards_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In corso`)
};

const nl_admin_awards_running = /** @type {(inputs: Admin_Awards_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nu`)
};

const pl_admin_awards_running = /** @type {(inputs: Admin_Awards_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teraz`)
};

const pt_admin_awards_running = /** @type {(inputs: Admin_Awards_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agora`)
};

const ru_admin_awards_running = /** @type {(inputs: Admin_Awards_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сейчас`)
};

const sv_admin_awards_running = /** @type {(inputs: Admin_Awards_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nu`)
};

const tr_admin_awards_running = /** @type {(inputs: Admin_Awards_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şimdi`)
};

const zh_admin_awards_running = /** @type {(inputs: Admin_Awards_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`进行中`)
};

const ja_admin_awards_running = /** @type {(inputs: Admin_Awards_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開催中`)
};

/**
* | output |
* | --- |
* | "Now" |
*
* @param {Admin_Awards_RunningInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_running = /** @type {((inputs?: Admin_Awards_RunningInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_RunningInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_running(inputs)
	if (locale === "de") return de_admin_awards_running(inputs)
	if (locale === "fr") return fr_admin_awards_running(inputs)
	if (locale === "it") return it_admin_awards_running(inputs)
	if (locale === "nl") return nl_admin_awards_running(inputs)
	if (locale === "pl") return pl_admin_awards_running(inputs)
	if (locale === "pt") return pt_admin_awards_running(inputs)
	if (locale === "ru") return ru_admin_awards_running(inputs)
	if (locale === "sv") return sv_admin_awards_running(inputs)
	if (locale === "tr") return tr_admin_awards_running(inputs)
	if (locale === "zh") return zh_admin_awards_running(inputs)
	if (locale === "ja") return ja_admin_awards_running(inputs)
	return en_admin_awards_running(inputs)
});
