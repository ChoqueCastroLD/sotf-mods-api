/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_Broken_ActionInputs */

const en_basecamp_attention_broken_action = /** @type {(inputs: Basecamp_Attention_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Post an update`)
};

const es_basecamp_attention_broken_action = /** @type {(inputs: Basecamp_Attention_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar una actualización`)
};

const de_basecamp_attention_broken_action = /** @type {(inputs: Basecamp_Attention_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update veröffentlichen`)
};

const fr_basecamp_attention_broken_action = /** @type {(inputs: Basecamp_Attention_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publier une mise à jour`)
};

const it_basecamp_attention_broken_action = /** @type {(inputs: Basecamp_Attention_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblica un aggiornamento`)
};

const nl_basecamp_attention_broken_action = /** @type {(inputs: Basecamp_Attention_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een update publiceren`)
};

const pl_basecamp_attention_broken_action = /** @type {(inputs: Basecamp_Attention_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikuj aktualizację`)
};

const pt_basecamp_attention_broken_action = /** @type {(inputs: Basecamp_Attention_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar uma atualização`)
};

const ru_basecamp_attention_broken_action = /** @type {(inputs: Basecamp_Attention_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выпустить обновление`)
};

const sv_basecamp_attention_broken_action = /** @type {(inputs: Basecamp_Attention_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicera en uppdatering`)
};

const tr_basecamp_attention_broken_action = /** @type {(inputs: Basecamp_Attention_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncelleme yayınla`)
};

const zh_basecamp_attention_broken_action = /** @type {(inputs: Basecamp_Attention_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布更新`)
};

const ja_basecamp_attention_broken_action = /** @type {(inputs: Basecamp_Attention_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アップデートを公開`)
};

/**
* | output |
* | --- |
* | "Post an update" |
*
* @param {Basecamp_Attention_Broken_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_broken_action = /** @type {((inputs?: Basecamp_Attention_Broken_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Broken_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_broken_action(inputs)
	if (locale === "de") return de_basecamp_attention_broken_action(inputs)
	if (locale === "fr") return fr_basecamp_attention_broken_action(inputs)
	if (locale === "it") return it_basecamp_attention_broken_action(inputs)
	if (locale === "nl") return nl_basecamp_attention_broken_action(inputs)
	if (locale === "pl") return pl_basecamp_attention_broken_action(inputs)
	if (locale === "pt") return pt_basecamp_attention_broken_action(inputs)
	if (locale === "ru") return ru_basecamp_attention_broken_action(inputs)
	if (locale === "sv") return sv_basecamp_attention_broken_action(inputs)
	if (locale === "tr") return tr_basecamp_attention_broken_action(inputs)
	if (locale === "zh") return zh_basecamp_attention_broken_action(inputs)
	if (locale === "ja") return ja_basecamp_attention_broken_action(inputs)
	return en_basecamp_attention_broken_action(inputs)
});
