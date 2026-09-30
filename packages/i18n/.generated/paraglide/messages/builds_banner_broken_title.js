/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Banner_Broken_TitleInputs */

const en_builds_banner_broken_title = /** @type {(inputs: Builds_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reported broken`)
};

const es_builds_banner_broken_title = /** @type {(inputs: Builds_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportada como rota`)
};

const de_builds_banner_broken_title = /** @type {(inputs: Builds_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als defekt gemeldet`)
};

const fr_builds_banner_broken_title = /** @type {(inputs: Builds_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signalée cassée`)
};

const it_builds_banner_broken_title = /** @type {(inputs: Builds_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnalata come rotta`)
};

const nl_builds_banner_broken_title = /** @type {(inputs: Builds_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemeld als kapot`)
};

const pl_builds_banner_broken_title = /** @type {(inputs: Builds_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszony jako zepsuty`)
};

const pt_builds_banner_broken_title = /** @type {(inputs: Builds_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportada como quebrada`)
};

const ru_builds_banner_broken_title = /** @type {(inputs: Builds_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сообщают о поломке`)
};

const sv_builds_banner_broken_title = /** @type {(inputs: Builds_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporterat trasigt`)
};

const tr_builds_banner_broken_title = /** @type {(inputs: Builds_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bozuk olarak bildirildi`)
};

const zh_builds_banner_broken_title = /** @type {(inputs: Builds_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`被报告无法使用`)
};

const ja_builds_banner_broken_title = /** @type {(inputs: Builds_Banner_Broken_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動作しないとの報告`)
};

/**
* | output |
* | --- |
* | "Reported broken" |
*
* @param {Builds_Banner_Broken_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_banner_broken_title = /** @type {((inputs?: Builds_Banner_Broken_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Banner_Broken_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_banner_broken_title(inputs)
	if (locale === "de") return de_builds_banner_broken_title(inputs)
	if (locale === "fr") return fr_builds_banner_broken_title(inputs)
	if (locale === "it") return it_builds_banner_broken_title(inputs)
	if (locale === "nl") return nl_builds_banner_broken_title(inputs)
	if (locale === "pl") return pl_builds_banner_broken_title(inputs)
	if (locale === "pt") return pt_builds_banner_broken_title(inputs)
	if (locale === "ru") return ru_builds_banner_broken_title(inputs)
	if (locale === "sv") return sv_builds_banner_broken_title(inputs)
	if (locale === "tr") return tr_builds_banner_broken_title(inputs)
	if (locale === "zh") return zh_builds_banner_broken_title(inputs)
	if (locale === "ja") return ja_builds_banner_broken_title(inputs)
	return en_builds_banner_broken_title(inputs)
});
