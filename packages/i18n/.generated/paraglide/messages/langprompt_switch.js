/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ language: NonNullable<unknown> }} Langprompt_SwitchInputs */

const en_langprompt_switch = /** @type {(inputs: Langprompt_SwitchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Switch to ${i?.language}`)
};

const es_langprompt_switch = /** @type {(inputs: Langprompt_SwitchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cambiar a ${i?.language}`)
};

const de_langprompt_switch = /** @type {(inputs: Langprompt_SwitchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zu ${i?.language} wechseln`)
};

const fr_langprompt_switch = /** @type {(inputs: Langprompt_SwitchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Passer en ${i?.language}`)
};

const it_langprompt_switch = /** @type {(inputs: Langprompt_SwitchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Passa a ${i?.language}`)
};

const nl_langprompt_switch = /** @type {(inputs: Langprompt_SwitchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Overschakelen naar ${i?.language}`)
};

const pl_langprompt_switch = /** @type {(inputs: Langprompt_SwitchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przełącz na: ${i?.language}`)
};

const pt_langprompt_switch = /** @type {(inputs: Langprompt_SwitchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mudar para ${i?.language}`)
};

const ru_langprompt_switch = /** @type {(inputs: Langprompt_SwitchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Переключиться: ${i?.language}`)
};

const sv_langprompt_switch = /** @type {(inputs: Langprompt_SwitchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Byt till ${i?.language}`)
};

const tr_langprompt_switch = /** @type {(inputs: Langprompt_SwitchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.language} diline geç`)
};

const zh_langprompt_switch = /** @type {(inputs: Langprompt_SwitchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`切换到${i?.language}`)
};

const ja_langprompt_switch = /** @type {(inputs: Langprompt_SwitchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.language}に切り替える`)
};

/**
* | output |
* | --- |
* | "Switch to {language}" |
*
* @param {Langprompt_SwitchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const langprompt_switch = /** @type {((inputs: Langprompt_SwitchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Langprompt_SwitchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_langprompt_switch(inputs)
	if (locale === "de") return de_langprompt_switch(inputs)
	if (locale === "fr") return fr_langprompt_switch(inputs)
	if (locale === "it") return it_langprompt_switch(inputs)
	if (locale === "nl") return nl_langprompt_switch(inputs)
	if (locale === "pl") return pl_langprompt_switch(inputs)
	if (locale === "pt") return pt_langprompt_switch(inputs)
	if (locale === "ru") return ru_langprompt_switch(inputs)
	if (locale === "sv") return sv_langprompt_switch(inputs)
	if (locale === "tr") return tr_langprompt_switch(inputs)
	if (locale === "zh") return zh_langprompt_switch(inputs)
	if (locale === "ja") return ja_langprompt_switch(inputs)
	return en_langprompt_switch(inputs)
});
