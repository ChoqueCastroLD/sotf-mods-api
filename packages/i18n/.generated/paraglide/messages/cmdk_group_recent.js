/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Group_RecentInputs */

const en_cmdk_group_recent = /** @type {(inputs: Cmdk_Group_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recent`)
};

const es_cmdk_group_recent = /** @type {(inputs: Cmdk_Group_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recientes`)
};

const de_cmdk_group_recent = /** @type {(inputs: Cmdk_Group_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zuletzt geöffnet`)
};

const fr_cmdk_group_recent = /** @type {(inputs: Cmdk_Group_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Récents`)
};

const it_cmdk_group_recent = /** @type {(inputs: Cmdk_Group_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recenti`)
};

const nl_cmdk_group_recent = /** @type {(inputs: Cmdk_Group_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recent`)
};

const pl_cmdk_group_recent = /** @type {(inputs: Cmdk_Group_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnie`)
};

const pt_cmdk_group_recent = /** @type {(inputs: Cmdk_Group_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recentes`)
};

const ru_cmdk_group_recent = /** @type {(inputs: Cmdk_Group_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Недавние`)
};

const sv_cmdk_group_recent = /** @type {(inputs: Cmdk_Group_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste`)
};

const tr_cmdk_group_recent = /** @type {(inputs: Cmdk_Group_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son açılanlar`)
};

const zh_cmdk_group_recent = /** @type {(inputs: Cmdk_Group_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近打开`)
};

const ja_cmdk_group_recent = /** @type {(inputs: Cmdk_Group_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近開いたもの`)
};

/**
* | output |
* | --- |
* | "Recent" |
*
* @param {Cmdk_Group_RecentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_group_recent = /** @type {((inputs?: Cmdk_Group_RecentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Group_RecentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_group_recent(inputs)
	if (locale === "de") return de_cmdk_group_recent(inputs)
	if (locale === "fr") return fr_cmdk_group_recent(inputs)
	if (locale === "it") return it_cmdk_group_recent(inputs)
	if (locale === "nl") return nl_cmdk_group_recent(inputs)
	if (locale === "pl") return pl_cmdk_group_recent(inputs)
	if (locale === "pt") return pt_cmdk_group_recent(inputs)
	if (locale === "ru") return ru_cmdk_group_recent(inputs)
	if (locale === "sv") return sv_cmdk_group_recent(inputs)
	if (locale === "tr") return tr_cmdk_group_recent(inputs)
	if (locale === "zh") return zh_cmdk_group_recent(inputs)
	if (locale === "ja") return ja_cmdk_group_recent(inputs)
	return en_cmdk_group_recent(inputs)
});
