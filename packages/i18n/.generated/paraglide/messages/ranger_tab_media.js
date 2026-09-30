/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Tab_MediaInputs */

const en_ranger_tab_media = /** @type {(inputs: Ranger_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Media`)
};

const es_ranger_tab_media = /** @type {(inputs: Ranger_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imágenes`)
};

const de_ranger_tab_media = /** @type {(inputs: Ranger_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medien`)
};

const fr_ranger_tab_media = /** @type {(inputs: Ranger_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Médias`)
};

const it_ranger_tab_media = /** @type {(inputs: Ranger_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Immagini`)
};

const nl_ranger_tab_media = /** @type {(inputs: Ranger_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Media`)
};

const pl_ranger_tab_media = /** @type {(inputs: Ranger_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multimedia`)
};

const pt_ranger_tab_media = /** @type {(inputs: Ranger_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mídia`)
};

const ru_ranger_tab_media = /** @type {(inputs: Ranger_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Медиа`)
};

const sv_ranger_tab_media = /** @type {(inputs: Ranger_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Media`)
};

const tr_ranger_tab_media = /** @type {(inputs: Ranger_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medya`)
};

const zh_ranger_tab_media = /** @type {(inputs: Ranger_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`媒体`)
};

const ja_ranger_tab_media = /** @type {(inputs: Ranger_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メディア`)
};

/**
* | output |
* | --- |
* | "Media" |
*
* @param {Ranger_Tab_MediaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_tab_media = /** @type {((inputs?: Ranger_Tab_MediaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Tab_MediaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_tab_media(inputs)
	if (locale === "de") return de_ranger_tab_media(inputs)
	if (locale === "fr") return fr_ranger_tab_media(inputs)
	if (locale === "it") return it_ranger_tab_media(inputs)
	if (locale === "nl") return nl_ranger_tab_media(inputs)
	if (locale === "pl") return pl_ranger_tab_media(inputs)
	if (locale === "pt") return pt_ranger_tab_media(inputs)
	if (locale === "ru") return ru_ranger_tab_media(inputs)
	if (locale === "sv") return sv_ranger_tab_media(inputs)
	if (locale === "tr") return tr_ranger_tab_media(inputs)
	if (locale === "zh") return zh_ranger_tab_media(inputs)
	if (locale === "ja") return ja_ranger_tab_media(inputs)
	return en_ranger_tab_media(inputs)
});
