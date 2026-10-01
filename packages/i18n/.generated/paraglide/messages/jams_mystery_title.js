/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Mystery_TitleInputs */

const en_jams_mystery_title = /** @type {(inputs: Jams_Mystery_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Theme sealed`)
};

const es_jams_mystery_title = /** @type {(inputs: Jams_Mystery_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema sellado`)
};

const de_jams_mystery_title = /** @type {(inputs: Jams_Mystery_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thema versiegelt`)
};

const fr_jams_mystery_title = /** @type {(inputs: Jams_Mystery_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thème scellé`)
};

const it_jams_mystery_title = /** @type {(inputs: Jams_Mystery_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema sigillato`)
};

const nl_jams_mystery_title = /** @type {(inputs: Jams_Mystery_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thema verzegeld`)
};

const pl_jams_mystery_title = /** @type {(inputs: Jams_Mystery_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temat zapieczętowany`)
};

const pt_jams_mystery_title = /** @type {(inputs: Jams_Mystery_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema lacrado`)
};

const ru_jams_mystery_title = /** @type {(inputs: Jams_Mystery_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тема под печатью`)
};

const sv_jams_mystery_title = /** @type {(inputs: Jams_Mystery_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temat förseglat`)
};

const tr_jams_mystery_title = /** @type {(inputs: Jams_Mystery_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema mühürlü`)
};

const zh_jams_mystery_title = /** @type {(inputs: Jams_Mystery_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`主题已封存`)
};

const ja_jams_mystery_title = /** @type {(inputs: Jams_Mystery_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テーマは封印中`)
};

/**
* | output |
* | --- |
* | "Theme sealed" |
*
* @param {Jams_Mystery_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_mystery_title = /** @type {((inputs?: Jams_Mystery_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Mystery_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_mystery_title(inputs)
	if (locale === "de") return de_jams_mystery_title(inputs)
	if (locale === "fr") return fr_jams_mystery_title(inputs)
	if (locale === "it") return it_jams_mystery_title(inputs)
	if (locale === "nl") return nl_jams_mystery_title(inputs)
	if (locale === "pl") return pl_jams_mystery_title(inputs)
	if (locale === "pt") return pt_jams_mystery_title(inputs)
	if (locale === "ru") return ru_jams_mystery_title(inputs)
	if (locale === "sv") return sv_jams_mystery_title(inputs)
	if (locale === "tr") return tr_jams_mystery_title(inputs)
	if (locale === "zh") return zh_jams_mystery_title(inputs)
	if (locale === "ja") return ja_jams_mystery_title(inputs)
	return en_jams_mystery_title(inputs)
});
