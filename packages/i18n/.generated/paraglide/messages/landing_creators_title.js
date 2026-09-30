/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Creators_TitleInputs */

const en_landing_creators_title = /** @type {(inputs: Landing_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator spotlight`)
};

const es_landing_creators_title = /** @type {(inputs: Landing_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creadores destacados`)
};

const de_landing_creators_title = /** @type {(inputs: Landing_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ersteller im Rampenlicht`)
};

const fr_landing_creators_title = /** @type {(inputs: Landing_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateurs à l’honneur`)
};

const it_landing_creators_title = /** @type {(inputs: Landing_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatori in primo piano`)
};

const nl_landing_creators_title = /** @type {(inputs: Landing_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Makers in de spotlight`)
};

const pl_landing_creators_title = /** @type {(inputs: Landing_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórcy w centrum uwagi`)
};

const pt_landing_creators_title = /** @type {(inputs: Landing_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criadores em destaque`)
};

const ru_landing_creators_title = /** @type {(inputs: Landing_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Авторы в центре внимания`)
};

const sv_landing_creators_title = /** @type {(inputs: Landing_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapare i rampljuset`)
};

const tr_landing_creators_title = /** @type {(inputs: Landing_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öne çıkan yapımcılar`)
};

const zh_landing_creators_title = /** @type {(inputs: Landing_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者聚光灯`)
};

const ja_landing_creators_title = /** @type {(inputs: Landing_Creators_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注目のクリエイター`)
};

/**
* | output |
* | --- |
* | "Creator spotlight" |
*
* @param {Landing_Creators_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_creators_title = /** @type {((inputs?: Landing_Creators_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Creators_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_creators_title(inputs)
	if (locale === "de") return de_landing_creators_title(inputs)
	if (locale === "fr") return fr_landing_creators_title(inputs)
	if (locale === "it") return it_landing_creators_title(inputs)
	if (locale === "nl") return nl_landing_creators_title(inputs)
	if (locale === "pl") return pl_landing_creators_title(inputs)
	if (locale === "pt") return pt_landing_creators_title(inputs)
	if (locale === "ru") return ru_landing_creators_title(inputs)
	if (locale === "sv") return sv_landing_creators_title(inputs)
	if (locale === "tr") return tr_landing_creators_title(inputs)
	if (locale === "zh") return zh_landing_creators_title(inputs)
	if (locale === "ja") return ja_landing_creators_title(inputs)
	return en_landing_creators_title(inputs)
});
