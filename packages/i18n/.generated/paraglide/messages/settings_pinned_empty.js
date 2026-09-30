/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Pinned_EmptyInputs */

const en_settings_pinned_empty = /** @type {(inputs: Settings_Pinned_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Once one of your mods is published you can pin it here.`)
};

const es_settings_pinned_empty = /** @type {(inputs: Settings_Pinned_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuando publiques un mod podrás fijarlo aquí.`)
};

const de_settings_pinned_empty = /** @type {(inputs: Settings_Pinned_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobald einer deiner Mods veröffentlicht ist, kannst du ihn hier anheften.`)
};

const fr_settings_pinned_empty = /** @type {(inputs: Settings_Pinned_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dès qu’un de vos mods est publié, vous pourrez l’épingler ici.`)
};

const it_settings_pinned_empty = /** @type {(inputs: Settings_Pinned_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quando una tua mod sarà pubblicata potrai metterla in evidenza qui.`)
};

const nl_settings_pinned_empty = /** @type {(inputs: Settings_Pinned_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zodra een van je mods is gepubliceerd, kun je hem hier vastzetten.`)
};

const pl_settings_pinned_empty = /** @type {(inputs: Settings_Pinned_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gdy któryś z twoich modów zostanie opublikowany, przypniesz go tutaj.`)
};

const pt_settings_pinned_empty = /** @type {(inputs: Settings_Pinned_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quando um dos seus mods for publicado, você poderá fixá-lo aqui.`)
};

const ru_settings_pinned_empty = /** @type {(inputs: Settings_Pinned_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Когда какой-нибудь ваш мод будет опубликован, его можно будет закрепить здесь.`)
};

const sv_settings_pinned_empty = /** @type {(inputs: Settings_Pinned_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`När en av dina moddar är publicerad kan du fästa den här.`)
};

const tr_settings_pinned_empty = /** @type {(inputs: Settings_Pinned_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarından biri yayımlandığında burada sabitleyebilirsin.`)
};

const zh_settings_pinned_empty = /** @type {(inputs: Settings_Pinned_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`等你的模组发布后，就可以在这里置顶。`)
};

const ja_settings_pinned_empty = /** @type {(inputs: Settings_Pinned_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODを公開すると、ここで固定できます。`)
};

/**
* | output |
* | --- |
* | "Once one of your mods is published you can pin it here." |
*
* @param {Settings_Pinned_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_pinned_empty = /** @type {((inputs?: Settings_Pinned_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Pinned_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_pinned_empty(inputs)
	if (locale === "de") return de_settings_pinned_empty(inputs)
	if (locale === "fr") return fr_settings_pinned_empty(inputs)
	if (locale === "it") return it_settings_pinned_empty(inputs)
	if (locale === "nl") return nl_settings_pinned_empty(inputs)
	if (locale === "pl") return pl_settings_pinned_empty(inputs)
	if (locale === "pt") return pt_settings_pinned_empty(inputs)
	if (locale === "ru") return ru_settings_pinned_empty(inputs)
	if (locale === "sv") return sv_settings_pinned_empty(inputs)
	if (locale === "tr") return tr_settings_pinned_empty(inputs)
	if (locale === "zh") return zh_settings_pinned_empty(inputs)
	if (locale === "ja") return ja_settings_pinned_empty(inputs)
	return en_settings_pinned_empty(inputs)
});
