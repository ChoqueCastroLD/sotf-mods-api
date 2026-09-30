/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Nsfw_ConfirmInputs */

const en_mod_nsfw_confirm = /** @type {(inputs: Mod_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I’m 18 or older, show it`)
};

const es_mod_nsfw_confirm = /** @type {(inputs: Mod_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tengo 18 años o más, mostrarlo`)
};

const de_mod_nsfw_confirm = /** @type {(inputs: Mod_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ich bin mindestens 18, anzeigen`)
};

const fr_mod_nsfw_confirm = /** @type {(inputs: Mod_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`J’ai 18 ans ou plus, afficher`)
};

const it_mod_nsfw_confirm = /** @type {(inputs: Mod_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ho almeno 18 anni, mostrala`)
};

const nl_mod_nsfw_confirm = /** @type {(inputs: Mod_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ik ben 18 of ouder, tonen`)
};

const pl_mod_nsfw_confirm = /** @type {(inputs: Mod_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mam co najmniej 18 lat, pokaż`)
};

const pt_mod_nsfw_confirm = /** @type {(inputs: Mod_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tenho 18 anos ou mais, mostrar`)
};

const ru_mod_nsfw_confirm = /** @type {(inputs: Mod_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мне есть 18, показать`)
};

const sv_mod_nsfw_confirm = /** @type {(inputs: Mod_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jag är 18 eller äldre, visa`)
};

const tr_mod_nsfw_confirm = /** @type {(inputs: Mod_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18 yaşında veya daha büyüğüm, göster`)
};

const zh_mod_nsfw_confirm = /** @type {(inputs: Mod_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我已年满 18 岁，显示`)
};

const ja_mod_nsfw_confirm = /** @type {(inputs: Mod_Nsfw_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18 歳以上なので表示する`)
};

/**
* | output |
* | --- |
* | "I’m 18 or older, show it" |
*
* @param {Mod_Nsfw_ConfirmInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_nsfw_confirm = /** @type {((inputs?: Mod_Nsfw_ConfirmInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Nsfw_ConfirmInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_nsfw_confirm(inputs)
	if (locale === "de") return de_mod_nsfw_confirm(inputs)
	if (locale === "fr") return fr_mod_nsfw_confirm(inputs)
	if (locale === "it") return it_mod_nsfw_confirm(inputs)
	if (locale === "nl") return nl_mod_nsfw_confirm(inputs)
	if (locale === "pl") return pl_mod_nsfw_confirm(inputs)
	if (locale === "pt") return pt_mod_nsfw_confirm(inputs)
	if (locale === "ru") return ru_mod_nsfw_confirm(inputs)
	if (locale === "sv") return sv_mod_nsfw_confirm(inputs)
	if (locale === "tr") return tr_mod_nsfw_confirm(inputs)
	if (locale === "zh") return zh_mod_nsfw_confirm(inputs)
	if (locale === "ja") return ja_mod_nsfw_confirm(inputs)
	return en_mod_nsfw_confirm(inputs)
});
