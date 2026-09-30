/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Langprompt_RememberInputs */

const en_langprompt_remember = /** @type {(inputs: Langprompt_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remember my choice`)
};

const es_langprompt_remember = /** @type {(inputs: Langprompt_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recordar mi elección`)
};

const de_langprompt_remember = /** @type {(inputs: Langprompt_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meine Auswahl merken`)
};

const fr_langprompt_remember = /** @type {(inputs: Langprompt_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mémoriser mon choix`)
};

const it_langprompt_remember = /** @type {(inputs: Langprompt_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricorda la mia scelta`)
};

const nl_langprompt_remember = /** @type {(inputs: Langprompt_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onthoud mijn keuze`)
};

const pl_langprompt_remember = /** @type {(inputs: Langprompt_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapamiętaj mój wybór`)
};

const pt_langprompt_remember = /** @type {(inputs: Langprompt_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lembrar minha escolha`)
};

const ru_langprompt_remember = /** @type {(inputs: Langprompt_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запомнить мой выбор`)
};

const sv_langprompt_remember = /** @type {(inputs: Langprompt_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kom ihåg mitt val`)
};

const tr_langprompt_remember = /** @type {(inputs: Langprompt_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seçimimi hatırla`)
};

const zh_langprompt_remember = /** @type {(inputs: Langprompt_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`记住我的选择`)
};

const ja_langprompt_remember = /** @type {(inputs: Langprompt_RememberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`選択を記憶する`)
};

/**
* | output |
* | --- |
* | "Remember my choice" |
*
* @param {Langprompt_RememberInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const langprompt_remember = /** @type {((inputs?: Langprompt_RememberInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Langprompt_RememberInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_langprompt_remember(inputs)
	if (locale === "de") return de_langprompt_remember(inputs)
	if (locale === "fr") return fr_langprompt_remember(inputs)
	if (locale === "it") return it_langprompt_remember(inputs)
	if (locale === "nl") return nl_langprompt_remember(inputs)
	if (locale === "pl") return pl_langprompt_remember(inputs)
	if (locale === "pt") return pt_langprompt_remember(inputs)
	if (locale === "ru") return ru_langprompt_remember(inputs)
	if (locale === "sv") return sv_langprompt_remember(inputs)
	if (locale === "tr") return tr_langprompt_remember(inputs)
	if (locale === "zh") return zh_langprompt_remember(inputs)
	if (locale === "ja") return ja_langprompt_remember(inputs)
	return en_langprompt_remember(inputs)
});
