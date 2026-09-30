/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_History_PublishedInputs */

const en_ranger_history_published = /** @type {(inputs: Ranger_History_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods published`)
};

const es_ranger_history_published = /** @type {(inputs: Ranger_History_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods publicados`)
};

const de_ranger_history_published = /** @type {(inputs: Ranger_History_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentlichte Mods`)
};

const fr_ranger_history_published = /** @type {(inputs: Ranger_History_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods publiés`)
};

const it_ranger_history_published = /** @type {(inputs: Ranger_History_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod pubblicate`)
};

const nl_ranger_history_published = /** @type {(inputs: Ranger_History_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gepubliceerde mods`)
};

const pl_ranger_history_published = /** @type {(inputs: Ranger_History_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikowane mody`)
};

const pt_ranger_history_published = /** @type {(inputs: Ranger_History_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods publicados`)
};

const ru_ranger_history_published = /** @type {(inputs: Ranger_History_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликовано модов`)
};

const sv_ranger_history_published = /** @type {(inputs: Ranger_History_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicerade moddar`)
};

const tr_ranger_history_published = /** @type {(inputs: Ranger_History_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayımlanan modlar`)
};

const zh_ranger_history_published = /** @type {(inputs: Ranger_History_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已发布模组`)
};

const ja_ranger_history_published = /** @type {(inputs: Ranger_History_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開したMOD`)
};

/**
* | output |
* | --- |
* | "Mods published" |
*
* @param {Ranger_History_PublishedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_history_published = /** @type {((inputs?: Ranger_History_PublishedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_History_PublishedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_history_published(inputs)
	if (locale === "de") return de_ranger_history_published(inputs)
	if (locale === "fr") return fr_ranger_history_published(inputs)
	if (locale === "it") return it_ranger_history_published(inputs)
	if (locale === "nl") return nl_ranger_history_published(inputs)
	if (locale === "pl") return pl_ranger_history_published(inputs)
	if (locale === "pt") return pt_ranger_history_published(inputs)
	if (locale === "ru") return ru_ranger_history_published(inputs)
	if (locale === "sv") return sv_ranger_history_published(inputs)
	if (locale === "tr") return tr_ranger_history_published(inputs)
	if (locale === "zh") return zh_ranger_history_published(inputs)
	if (locale === "ja") return ja_ranger_history_published(inputs)
	return en_ranger_history_published(inputs)
});
