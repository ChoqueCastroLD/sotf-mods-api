/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Import_Key_HintInputs */

const en_builds_import_key_hint = /** @type {(inputs: Builds_Import_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can change the key in Mods → BuildShare → Toggle Key.`)
};

const es_builds_import_key_hint = /** @type {(inputs: Builds_Import_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puedes cambiar la tecla en Mods → BuildShare → Toggle Key.`)
};

const de_builds_import_key_hint = /** @type {(inputs: Builds_Import_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Taste kannst du unter Mods → BuildShare → Toggle Key ändern.`)
};

const fr_builds_import_key_hint = /** @type {(inputs: Builds_Import_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous pouvez changer la touche dans Mods → BuildShare → Toggle Key.`)
};

const it_builds_import_key_hint = /** @type {(inputs: Builds_Import_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puoi cambiare il tasto in Mods → BuildShare → Toggle Key.`)
};

const nl_builds_import_key_hint = /** @type {(inputs: Builds_Import_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je kunt de toets wijzigen via Mods → BuildShare → Toggle Key.`)
};

const pl_builds_import_key_hint = /** @type {(inputs: Builds_Import_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klawisz zmienisz w Mods → BuildShare → Toggle Key.`)
};

const pt_builds_import_key_hint = /** @type {(inputs: Builds_Import_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você pode mudar a tecla em Mods → BuildShare → Toggle Key.`)
};

const ru_builds_import_key_hint = /** @type {(inputs: Builds_Import_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Клавишу можно сменить в Mods → BuildShare → Toggle Key.`)
};

const sv_builds_import_key_hint = /** @type {(inputs: Builds_Import_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du kan byta tangent under Mods → BuildShare → Toggle Key.`)
};

const tr_builds_import_key_hint = /** @type {(inputs: Builds_Import_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tuşu Mods → BuildShare → Toggle Key bölümünden değiştirebilirsin.`)
};

const zh_builds_import_key_hint = /** @type {(inputs: Builds_Import_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可在 Mods → BuildShare → Toggle Key 中更改按键。`)
};

const ja_builds_import_key_hint = /** @type {(inputs: Builds_Import_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キーは Mods → BuildShare → Toggle Key で変更できます。`)
};

/**
* | output |
* | --- |
* | "You can change the key in Mods → BuildShare → Toggle Key." |
*
* @param {Builds_Import_Key_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_import_key_hint = /** @type {((inputs?: Builds_Import_Key_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Import_Key_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_import_key_hint(inputs)
	if (locale === "de") return de_builds_import_key_hint(inputs)
	if (locale === "fr") return fr_builds_import_key_hint(inputs)
	if (locale === "it") return it_builds_import_key_hint(inputs)
	if (locale === "nl") return nl_builds_import_key_hint(inputs)
	if (locale === "pl") return pl_builds_import_key_hint(inputs)
	if (locale === "pt") return pt_builds_import_key_hint(inputs)
	if (locale === "ru") return ru_builds_import_key_hint(inputs)
	if (locale === "sv") return sv_builds_import_key_hint(inputs)
	if (locale === "tr") return tr_builds_import_key_hint(inputs)
	if (locale === "zh") return zh_builds_import_key_hint(inputs)
	if (locale === "ja") return ja_builds_import_key_hint(inputs)
	return en_builds_import_key_hint(inputs)
});
