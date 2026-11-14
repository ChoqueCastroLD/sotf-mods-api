/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Empty_TextInputs */

const en_modpacks_empty_text = /** @type {(inputs: Modpacks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Put your favourite mods together and share them as a modpack.`)
};

const es_modpacks_empty_text = /** @type {(inputs: Modpacks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Junta tus mods favoritos y compártelos como modpack.`)
};

const de_modpacks_empty_text = /** @type {(inputs: Modpacks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stelle deine Lieblingsmods zusammen und teile sie als Modpack.`)
};

const fr_modpacks_empty_text = /** @type {(inputs: Modpacks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rassemblez vos mods préférés et partagez-les sous forme de modpack.`)
};

const it_modpacks_empty_text = /** @type {(inputs: Modpacks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Metti insieme le tue mod preferite e condividile come modpack.`)
};

const nl_modpacks_empty_text = /** @type {(inputs: Modpacks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzamel je favoriete mods en deel ze als modpack.`)
};

const pl_modpacks_empty_text = /** @type {(inputs: Modpacks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zbierz ulubione mody i udostępnij je jako modpack.`)
};

const pt_modpacks_empty_text = /** @type {(inputs: Modpacks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Junte seus mods favoritos e compartilhe-os como um modpack.`)
};

const ru_modpacks_empty_text = /** @type {(inputs: Modpacks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Соберите любимые моды и поделитесь ими в виде модпака.`)
};

const sv_modpacks_empty_text = /** @type {(inputs: Modpacks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Samla dina favoritmoddar och dela dem som ett modpaket.`)
};

const tr_modpacks_empty_text = /** @type {(inputs: Modpacks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sevdiğin modları bir araya getir ve mod paketi olarak paylaş.`)
};

const zh_modpacks_empty_text = /** @type {(inputs: Modpacks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`把你喜欢的模组组合起来，作为整合包分享吧。`)
};

const ja_modpacks_empty_text = /** @type {(inputs: Modpacks_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`お気に入りの Mod をまとめて Modパックとして共有しましょう。`)
};

/**
* | output |
* | --- |
* | "Put your favourite mods together and share them as a modpack." |
*
* @param {Modpacks_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_empty_text = /** @type {((inputs?: Modpacks_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_empty_text(inputs)
	if (locale === "de") return de_modpacks_empty_text(inputs)
	if (locale === "fr") return fr_modpacks_empty_text(inputs)
	if (locale === "it") return it_modpacks_empty_text(inputs)
	if (locale === "nl") return nl_modpacks_empty_text(inputs)
	if (locale === "pl") return pl_modpacks_empty_text(inputs)
	if (locale === "pt") return pt_modpacks_empty_text(inputs)
	if (locale === "ru") return ru_modpacks_empty_text(inputs)
	if (locale === "sv") return sv_modpacks_empty_text(inputs)
	if (locale === "tr") return tr_modpacks_empty_text(inputs)
	if (locale === "zh") return zh_modpacks_empty_text(inputs)
	if (locale === "ja") return ja_modpacks_empty_text(inputs)
	return en_modpacks_empty_text(inputs)
});
