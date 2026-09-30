/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Updated_AnyInputs */

const en_explore_updated_any = /** @type {(inputs: Explore_Updated_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Any time`)
};

const es_explore_updated_any = /** @type {(inputs: Explore_Updated_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuando sea`)
};

const de_explore_updated_any = /** @type {(inputs: Explore_Updated_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jederzeit`)
};

const fr_explore_updated_any = /** @type {(inputs: Explore_Updated_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`N’importe quand`)
};

const it_explore_updated_any = /** @type {(inputs: Explore_Updated_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sempre`)
};

const nl_explore_updated_any = /** @type {(inputs: Explore_Updated_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altijd`)
};

const pl_explore_updated_any = /** @type {(inputs: Explore_Updated_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kiedykolwiek`)
};

const pt_explore_updated_any = /** @type {(inputs: Explore_Updated_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualquer data`)
};

const ru_explore_updated_any = /** @type {(inputs: Explore_Updated_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Когда угодно`)
};

const sv_explore_updated_any = /** @type {(inputs: Explore_Updated_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`När som helst`)
};

const tr_explore_updated_any = /** @type {(inputs: Explore_Updated_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herhangi bir zaman`)
};

const zh_explore_updated_any = /** @type {(inputs: Explore_Updated_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不限时间`)
};

const ja_explore_updated_any = /** @type {(inputs: Explore_Updated_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`期間指定なし`)
};

/**
* | output |
* | --- |
* | "Any time" |
*
* @param {Explore_Updated_AnyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_updated_any = /** @type {((inputs?: Explore_Updated_AnyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Updated_AnyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_updated_any(inputs)
	if (locale === "de") return de_explore_updated_any(inputs)
	if (locale === "fr") return fr_explore_updated_any(inputs)
	if (locale === "it") return it_explore_updated_any(inputs)
	if (locale === "nl") return nl_explore_updated_any(inputs)
	if (locale === "pl") return pl_explore_updated_any(inputs)
	if (locale === "pt") return pt_explore_updated_any(inputs)
	if (locale === "ru") return ru_explore_updated_any(inputs)
	if (locale === "sv") return sv_explore_updated_any(inputs)
	if (locale === "tr") return tr_explore_updated_any(inputs)
	if (locale === "zh") return zh_explore_updated_any(inputs)
	if (locale === "ja") return ja_explore_updated_any(inputs)
	return en_explore_updated_any(inputs)
});
