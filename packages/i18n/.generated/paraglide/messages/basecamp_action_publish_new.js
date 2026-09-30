/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Action_Publish_NewInputs */

const en_basecamp_action_publish_new = /** @type {(inputs: Basecamp_Action_Publish_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish something new`)
};

const es_basecamp_action_publish_new = /** @type {(inputs: Basecamp_Action_Publish_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar algo nuevo`)
};

const de_basecamp_action_publish_new = /** @type {(inputs: Basecamp_Action_Publish_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etwas Neues veröffentlichen`)
};

const fr_basecamp_action_publish_new = /** @type {(inputs: Basecamp_Action_Publish_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publier du nouveau`)
};

const it_basecamp_action_publish_new = /** @type {(inputs: Basecamp_Action_Publish_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblica qualcosa di nuovo`)
};

const nl_basecamp_action_publish_new = /** @type {(inputs: Basecamp_Action_Publish_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iets nieuws publiceren`)
};

const pl_basecamp_action_publish_new = /** @type {(inputs: Basecamp_Action_Publish_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikuj coś nowego`)
};

const pt_basecamp_action_publish_new = /** @type {(inputs: Basecamp_Action_Publish_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar algo novo`)
};

const ru_basecamp_action_publish_new = /** @type {(inputs: Basecamp_Action_Publish_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликовать что-то новое`)
};

const sv_basecamp_action_publish_new = /** @type {(inputs: Basecamp_Action_Publish_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicera något nytt`)
};

const tr_basecamp_action_publish_new = /** @type {(inputs: Basecamp_Action_Publish_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni bir şey yayınla`)
};

const zh_basecamp_action_publish_new = /** @type {(inputs: Basecamp_Action_Publish_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布新内容`)
};

const ja_basecamp_action_publish_new = /** @type {(inputs: Basecamp_Action_Publish_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しく公開する`)
};

/**
* | output |
* | --- |
* | "Publish something new" |
*
* @param {Basecamp_Action_Publish_NewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_action_publish_new = /** @type {((inputs?: Basecamp_Action_Publish_NewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Action_Publish_NewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_action_publish_new(inputs)
	if (locale === "de") return de_basecamp_action_publish_new(inputs)
	if (locale === "fr") return fr_basecamp_action_publish_new(inputs)
	if (locale === "it") return it_basecamp_action_publish_new(inputs)
	if (locale === "nl") return nl_basecamp_action_publish_new(inputs)
	if (locale === "pl") return pl_basecamp_action_publish_new(inputs)
	if (locale === "pt") return pt_basecamp_action_publish_new(inputs)
	if (locale === "ru") return ru_basecamp_action_publish_new(inputs)
	if (locale === "sv") return sv_basecamp_action_publish_new(inputs)
	if (locale === "tr") return tr_basecamp_action_publish_new(inputs)
	if (locale === "zh") return zh_basecamp_action_publish_new(inputs)
	if (locale === "ja") return ja_basecamp_action_publish_new(inputs)
	return en_basecamp_action_publish_new(inputs)
});
