/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Editor_Tab_MediaInputs */

const en_basecamp_editor_tab_media = /** @type {(inputs: Basecamp_Editor_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Media`)
};

const es_basecamp_editor_tab_media = /** @type {(inputs: Basecamp_Editor_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medios`)
};

const de_basecamp_editor_tab_media = /** @type {(inputs: Basecamp_Editor_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medien`)
};

const fr_basecamp_editor_tab_media = /** @type {(inputs: Basecamp_Editor_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Médias`)
};

const it_basecamp_editor_tab_media = /** @type {(inputs: Basecamp_Editor_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Media`)
};

const nl_basecamp_editor_tab_media = /** @type {(inputs: Basecamp_Editor_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Media`)
};

const pl_basecamp_editor_tab_media = /** @type {(inputs: Basecamp_Editor_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Media`)
};

const pt_basecamp_editor_tab_media = /** @type {(inputs: Basecamp_Editor_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mídia`)
};

const ru_basecamp_editor_tab_media = /** @type {(inputs: Basecamp_Editor_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Медиа`)
};

const sv_basecamp_editor_tab_media = /** @type {(inputs: Basecamp_Editor_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Media`)
};

const tr_basecamp_editor_tab_media = /** @type {(inputs: Basecamp_Editor_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medya`)
};

const zh_basecamp_editor_tab_media = /** @type {(inputs: Basecamp_Editor_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`媒体`)
};

const ja_basecamp_editor_tab_media = /** @type {(inputs: Basecamp_Editor_Tab_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メディア`)
};

/**
* | output |
* | --- |
* | "Media" |
*
* @param {Basecamp_Editor_Tab_MediaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_editor_tab_media = /** @type {((inputs?: Basecamp_Editor_Tab_MediaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Editor_Tab_MediaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_editor_tab_media(inputs)
	if (locale === "de") return de_basecamp_editor_tab_media(inputs)
	if (locale === "fr") return fr_basecamp_editor_tab_media(inputs)
	if (locale === "it") return it_basecamp_editor_tab_media(inputs)
	if (locale === "nl") return nl_basecamp_editor_tab_media(inputs)
	if (locale === "pl") return pl_basecamp_editor_tab_media(inputs)
	if (locale === "pt") return pt_basecamp_editor_tab_media(inputs)
	if (locale === "ru") return ru_basecamp_editor_tab_media(inputs)
	if (locale === "sv") return sv_basecamp_editor_tab_media(inputs)
	if (locale === "tr") return tr_basecamp_editor_tab_media(inputs)
	if (locale === "zh") return zh_basecamp_editor_tab_media(inputs)
	if (locale === "ja") return ja_basecamp_editor_tab_media(inputs)
	return en_basecamp_editor_tab_media(inputs)
});
