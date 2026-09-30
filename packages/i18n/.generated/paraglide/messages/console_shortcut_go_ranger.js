/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Shortcut_Go_RangerInputs */

const en_console_shortcut_go_ranger = /** @type {(inputs: Console_Shortcut_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Go to the Ranger Station`)
};

const es_console_shortcut_go_ranger = /** @type {(inputs: Console_Shortcut_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir al Puesto de guardabosques`)
};

const de_console_shortcut_go_ranger = /** @type {(inputs: Console_Shortcut_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zur Rangerstation`)
};

const fr_console_shortcut_go_ranger = /** @type {(inputs: Console_Shortcut_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aller au poste des rangers`)
};

const it_console_shortcut_go_ranger = /** @type {(inputs: Console_Shortcut_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vai alla stazione dei ranger`)
};

const nl_console_shortcut_go_ranger = /** @type {(inputs: Console_Shortcut_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naar de rangerpost`)
};

const pl_console_shortcut_go_ranger = /** @type {(inputs: Console_Shortcut_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przejdź do posterunku strażników`)
};

const pt_console_shortcut_go_ranger = /** @type {(inputs: Console_Shortcut_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir para o Posto dos guardas`)
};

const ru_console_shortcut_go_ranger = /** @type {(inputs: Console_Shortcut_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перейти на пост рейнджеров`)
};

const sv_console_shortcut_go_ranger = /** @type {(inputs: Console_Shortcut_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gå till rangerstationen`)
};

const tr_console_shortcut_go_ranger = /** @type {(inputs: Console_Shortcut_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korucu İstasyonu’na git`)
};

const zh_console_shortcut_go_ranger = /** @type {(inputs: Console_Shortcut_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前往护林站`)
};

const ja_console_shortcut_go_ranger = /** @type {(inputs: Console_Shortcut_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーステーションへ移動`)
};

/**
* | output |
* | --- |
* | "Go to the Ranger Station" |
*
* @param {Console_Shortcut_Go_RangerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_shortcut_go_ranger = /** @type {((inputs?: Console_Shortcut_Go_RangerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Shortcut_Go_RangerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_shortcut_go_ranger(inputs)
	if (locale === "de") return de_console_shortcut_go_ranger(inputs)
	if (locale === "fr") return fr_console_shortcut_go_ranger(inputs)
	if (locale === "it") return it_console_shortcut_go_ranger(inputs)
	if (locale === "nl") return nl_console_shortcut_go_ranger(inputs)
	if (locale === "pl") return pl_console_shortcut_go_ranger(inputs)
	if (locale === "pt") return pt_console_shortcut_go_ranger(inputs)
	if (locale === "ru") return ru_console_shortcut_go_ranger(inputs)
	if (locale === "sv") return sv_console_shortcut_go_ranger(inputs)
	if (locale === "tr") return tr_console_shortcut_go_ranger(inputs)
	if (locale === "zh") return zh_console_shortcut_go_ranger(inputs)
	if (locale === "ja") return ja_console_shortcut_go_ranger(inputs)
	return en_console_shortcut_go_ranger(inputs)
});
