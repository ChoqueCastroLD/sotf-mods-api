/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Action_PublishInputs */

const en_basecamp_action_publish = /** @type {(inputs: Basecamp_Action_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish again`)
};

const es_basecamp_action_publish = /** @type {(inputs: Basecamp_Action_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver a publicar`)
};

const de_basecamp_action_publish = /** @type {(inputs: Basecamp_Action_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wieder veröffentlichen`)
};

const fr_basecamp_action_publish = /** @type {(inputs: Basecamp_Action_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Republier`)
};

const it_basecamp_action_publish = /** @type {(inputs: Basecamp_Action_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblica di nuovo`)
};

const nl_basecamp_action_publish = /** @type {(inputs: Basecamp_Action_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw publiceren`)
};

const pl_basecamp_action_publish = /** @type {(inputs: Basecamp_Action_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikuj ponownie`)
};

const pt_basecamp_action_publish = /** @type {(inputs: Basecamp_Action_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar de novo`)
};

const ru_basecamp_action_publish = /** @type {(inputs: Basecamp_Action_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликовать снова`)
};

const sv_basecamp_action_publish = /** @type {(inputs: Basecamp_Action_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicera igen`)
};

const tr_basecamp_action_publish = /** @type {(inputs: Basecamp_Action_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeniden yayınla`)
};

const zh_basecamp_action_publish = /** @type {(inputs: Basecamp_Action_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新发布`)
};

const ja_basecamp_action_publish = /** @type {(inputs: Basecamp_Action_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再公開`)
};

/**
* | output |
* | --- |
* | "Publish again" |
*
* @param {Basecamp_Action_PublishInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_action_publish = /** @type {((inputs?: Basecamp_Action_PublishInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Action_PublishInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_action_publish(inputs)
	if (locale === "de") return de_basecamp_action_publish(inputs)
	if (locale === "fr") return fr_basecamp_action_publish(inputs)
	if (locale === "it") return it_basecamp_action_publish(inputs)
	if (locale === "nl") return nl_basecamp_action_publish(inputs)
	if (locale === "pl") return pl_basecamp_action_publish(inputs)
	if (locale === "pt") return pt_basecamp_action_publish(inputs)
	if (locale === "ru") return ru_basecamp_action_publish(inputs)
	if (locale === "sv") return sv_basecamp_action_publish(inputs)
	if (locale === "tr") return tr_basecamp_action_publish(inputs)
	if (locale === "zh") return zh_basecamp_action_publish(inputs)
	if (locale === "ja") return ja_basecamp_action_publish(inputs)
	return en_basecamp_action_publish(inputs)
});
