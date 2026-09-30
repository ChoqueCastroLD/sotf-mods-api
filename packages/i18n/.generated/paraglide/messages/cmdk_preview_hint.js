/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Preview_HintInputs */

const en_cmdk_preview_hint = /** @type {(inputs: Cmdk_Preview_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Press Enter to open it.`)
};

const es_cmdk_preview_hint = /** @type {(inputs: Cmdk_Preview_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pulsa Intro para abrirlo.`)
};

const de_cmdk_preview_hint = /** @type {(inputs: Cmdk_Preview_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drück Enter zum Öffnen.`)
};

const fr_cmdk_preview_hint = /** @type {(inputs: Cmdk_Preview_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appuyez sur Entrée pour l’ouvrir.`)
};

const it_cmdk_preview_hint = /** @type {(inputs: Cmdk_Preview_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premi Invio per aprirlo.`)
};

const nl_cmdk_preview_hint = /** @type {(inputs: Cmdk_Preview_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Druk op Enter om te openen.`)
};

const pl_cmdk_preview_hint = /** @type {(inputs: Cmdk_Preview_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naciśnij Enter, aby otworzyć.`)
};

const pt_cmdk_preview_hint = /** @type {(inputs: Cmdk_Preview_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pressione Enter para abrir.`)
};

const ru_cmdk_preview_hint = /** @type {(inputs: Cmdk_Preview_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нажмите Enter, чтобы открыть.`)
};

const sv_cmdk_preview_hint = /** @type {(inputs: Cmdk_Preview_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tryck på Enter för att öppna.`)
};

const tr_cmdk_preview_hint = /** @type {(inputs: Cmdk_Preview_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açmak için Enter’a bas.`)
};

const zh_cmdk_preview_hint = /** @type {(inputs: Cmdk_Preview_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按 Enter 打开。`)
};

const ja_cmdk_preview_hint = /** @type {(inputs: Cmdk_Preview_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter で開きます。`)
};

/**
* | output |
* | --- |
* | "Press Enter to open it." |
*
* @param {Cmdk_Preview_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_preview_hint = /** @type {((inputs?: Cmdk_Preview_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Preview_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_preview_hint(inputs)
	if (locale === "de") return de_cmdk_preview_hint(inputs)
	if (locale === "fr") return fr_cmdk_preview_hint(inputs)
	if (locale === "it") return it_cmdk_preview_hint(inputs)
	if (locale === "nl") return nl_cmdk_preview_hint(inputs)
	if (locale === "pl") return pl_cmdk_preview_hint(inputs)
	if (locale === "pt") return pt_cmdk_preview_hint(inputs)
	if (locale === "ru") return ru_cmdk_preview_hint(inputs)
	if (locale === "sv") return sv_cmdk_preview_hint(inputs)
	if (locale === "tr") return tr_cmdk_preview_hint(inputs)
	if (locale === "zh") return zh_cmdk_preview_hint(inputs)
	if (locale === "ja") return ja_cmdk_preview_hint(inputs)
	return en_cmdk_preview_hint(inputs)
});
