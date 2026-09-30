/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Profile_Feed_TitleInputs */

const en_profile_feed_title = /** @type {(inputs: Profile_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`New releases by ${i?.name}`)
};

const es_profile_feed_title = /** @type {(inputs: Profile_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Novedades de ${i?.name}`)
};

const de_profile_feed_title = /** @type {(inputs: Profile_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Neue Veröffentlichungen von ${i?.name}`)
};

const fr_profile_feed_title = /** @type {(inputs: Profile_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nouveautés de ${i?.name}`)
};

const it_profile_feed_title = /** @type {(inputs: Profile_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Novità di ${i?.name}`)
};

const nl_profile_feed_title = /** @type {(inputs: Profile_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nieuwe releases van ${i?.name}`)
};

const pl_profile_feed_title = /** @type {(inputs: Profile_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nowe wydania: ${i?.name}`)
};

const pt_profile_feed_title = /** @type {(inputs: Profile_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Novidades de ${i?.name}`)
};

const ru_profile_feed_title = /** @type {(inputs: Profile_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Новые релизы автора ${i?.name}`)
};

const sv_profile_feed_title = /** @type {(inputs: Profile_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nya släpp från ${i?.name}`)
};

const tr_profile_feed_title = /** @type {(inputs: Profile_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} kullanıcısının yeni yayınları`)
};

const zh_profile_feed_title = /** @type {(inputs: Profile_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的新发布`)
};

const ja_profile_feed_title = /** @type {(inputs: Profile_Feed_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の新着リリース`)
};

/**
* | output |
* | --- |
* | "New releases by {name}" |
*
* @param {Profile_Feed_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_feed_title = /** @type {((inputs: Profile_Feed_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Feed_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_feed_title(inputs)
	if (locale === "de") return de_profile_feed_title(inputs)
	if (locale === "fr") return fr_profile_feed_title(inputs)
	if (locale === "it") return it_profile_feed_title(inputs)
	if (locale === "nl") return nl_profile_feed_title(inputs)
	if (locale === "pl") return pl_profile_feed_title(inputs)
	if (locale === "pt") return pt_profile_feed_title(inputs)
	if (locale === "ru") return ru_profile_feed_title(inputs)
	if (locale === "sv") return sv_profile_feed_title(inputs)
	if (locale === "tr") return tr_profile_feed_title(inputs)
	if (locale === "zh") return zh_profile_feed_title(inputs)
	if (locale === "ja") return ja_profile_feed_title(inputs)
	return en_profile_feed_title(inputs)
});
