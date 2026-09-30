/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Stats_LabelInputs */

const en_landing_stats_label = /** @type {(inputs: Landing_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The island in numbers`)
};

const es_landing_stats_label = /** @type {(inputs: Landing_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La isla en cifras`)
};

const de_landing_stats_label = /** @type {(inputs: Landing_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Insel in Zahlen`)
};

const fr_landing_stats_label = /** @type {(inputs: Landing_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’île en chiffres`)
};

const it_landing_stats_label = /** @type {(inputs: Landing_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’isola in cifre`)
};

const nl_landing_stats_label = /** @type {(inputs: Landing_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het eiland in cijfers`)
};

const pl_landing_stats_label = /** @type {(inputs: Landing_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyspa w liczbach`)
};

const pt_landing_stats_label = /** @type {(inputs: Landing_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A ilha em números`)
};

const ru_landing_stats_label = /** @type {(inputs: Landing_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Остров в цифрах`)
};

const sv_landing_stats_label = /** @type {(inputs: Landing_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ön i siffror`)
};

const tr_landing_stats_label = /** @type {(inputs: Landing_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rakamlarla ada`)
};

const zh_landing_stats_label = /** @type {(inputs: Landing_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`岛上数据`)
};

const ja_landing_stats_label = /** @type {(inputs: Landing_Stats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`数字で見る島`)
};

/**
* | output |
* | --- |
* | "The island in numbers" |
*
* @param {Landing_Stats_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_stats_label = /** @type {((inputs?: Landing_Stats_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Stats_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_stats_label(inputs)
	if (locale === "de") return de_landing_stats_label(inputs)
	if (locale === "fr") return fr_landing_stats_label(inputs)
	if (locale === "it") return it_landing_stats_label(inputs)
	if (locale === "nl") return nl_landing_stats_label(inputs)
	if (locale === "pl") return pl_landing_stats_label(inputs)
	if (locale === "pt") return pt_landing_stats_label(inputs)
	if (locale === "ru") return ru_landing_stats_label(inputs)
	if (locale === "sv") return sv_landing_stats_label(inputs)
	if (locale === "tr") return tr_landing_stats_label(inputs)
	if (locale === "zh") return zh_landing_stats_label(inputs)
	if (locale === "ja") return ja_landing_stats_label(inputs)
	return en_landing_stats_label(inputs)
});
