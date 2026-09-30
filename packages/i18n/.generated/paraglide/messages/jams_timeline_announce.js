/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Timeline_AnnounceInputs */

const en_jams_timeline_announce = /** @type {(inputs: Jams_Timeline_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Announcement`)
};

const es_jams_timeline_announce = /** @type {(inputs: Jams_Timeline_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuncio`)
};

const de_jams_timeline_announce = /** @type {(inputs: Jams_Timeline_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ankündigung`)
};

const fr_jams_timeline_announce = /** @type {(inputs: Jams_Timeline_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annonce`)
};

const it_jams_timeline_announce = /** @type {(inputs: Jams_Timeline_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuncio`)
};

const nl_jams_timeline_announce = /** @type {(inputs: Jams_Timeline_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aankondiging`)
};

const pl_jams_timeline_announce = /** @type {(inputs: Jams_Timeline_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogłoszenie`)
};

const pt_jams_timeline_announce = /** @type {(inputs: Jams_Timeline_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anúncio`)
};

const ru_jams_timeline_announce = /** @type {(inputs: Jams_Timeline_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Анонс`)
};

const sv_jams_timeline_announce = /** @type {(inputs: Jams_Timeline_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillkännagivande`)
};

const tr_jams_timeline_announce = /** @type {(inputs: Jams_Timeline_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duyuru`)
};

const zh_jams_timeline_announce = /** @type {(inputs: Jams_Timeline_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公布`)
};

const ja_jams_timeline_announce = /** @type {(inputs: Jams_Timeline_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`告知`)
};

/**
* | output |
* | --- |
* | "Announcement" |
*
* @param {Jams_Timeline_AnnounceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_timeline_announce = /** @type {((inputs?: Jams_Timeline_AnnounceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Timeline_AnnounceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_timeline_announce(inputs)
	if (locale === "de") return de_jams_timeline_announce(inputs)
	if (locale === "fr") return fr_jams_timeline_announce(inputs)
	if (locale === "it") return it_jams_timeline_announce(inputs)
	if (locale === "nl") return nl_jams_timeline_announce(inputs)
	if (locale === "pl") return pl_jams_timeline_announce(inputs)
	if (locale === "pt") return pt_jams_timeline_announce(inputs)
	if (locale === "ru") return ru_jams_timeline_announce(inputs)
	if (locale === "sv") return sv_jams_timeline_announce(inputs)
	if (locale === "tr") return tr_jams_timeline_announce(inputs)
	if (locale === "zh") return zh_jams_timeline_announce(inputs)
	if (locale === "ja") return ja_jams_timeline_announce(inputs)
	return en_jams_timeline_announce(inputs)
});
