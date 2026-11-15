/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Shot_MainInputs */

const en_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager listing the mods of SOTF Mods, with Axel's Mod Menu selected`)
};

const es_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager con la lista de mods de SOTF Mods y Axel's Mod Menu seleccionado`)
};

const de_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager mit der Mod-Liste von SOTF Mods, Axel's Mod Menu ausgewählt`)
};

const fr_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager affichant les mods de SOTF Mods, Axel's Mod Menu sélectionné`)
};

const it_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager con l’elenco delle mod di SOTF Mods e Axel's Mod Menu selezionata`)
};

const nl_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager met de mods van SOTF Mods, Axel's Mod Menu geselecteerd`)
};

const pl_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager z listą modów SOTF Mods i zaznaczonym Axel's Mod Menu`)
};

const pt_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager com a lista de mods do SOTF Mods e o Axel's Mod Menu selecionado`)
};

const ru_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager со списком модов SOTF Mods, выбран Axel's Mod Menu`)
};

const sv_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager med moddarna från SOTF Mods och Axel's Mod Menu vald`)
};

const tr_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods modlarını listeleyen ve Axel's Mod Menu seçili SotF Mods Manager`)
};

const zh_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager 显示 SOTF Mods 的模组列表，选中了 Axel's Mod Menu`)
};

const ja_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods の Mod 一覧を表示し、Axel's Mod Menu を選択した SotF Mods Manager`)
};

/**
* | output |
* | --- |
* | "SotF Mods Manager listing the mods of SOTF Mods, with Axel's Mod Menu selected" |
*
* @param {Manager_Shot_MainInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_shot_main = /** @type {((inputs?: Manager_Shot_MainInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Shot_MainInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_shot_main(inputs)
	if (locale === "de") return de_manager_shot_main(inputs)
	if (locale === "fr") return fr_manager_shot_main(inputs)
	if (locale === "it") return it_manager_shot_main(inputs)
	if (locale === "nl") return nl_manager_shot_main(inputs)
	if (locale === "pl") return pl_manager_shot_main(inputs)
	if (locale === "pt") return pt_manager_shot_main(inputs)
	if (locale === "ru") return ru_manager_shot_main(inputs)
	if (locale === "sv") return sv_manager_shot_main(inputs)
	if (locale === "tr") return tr_manager_shot_main(inputs)
	if (locale === "zh") return zh_manager_shot_main(inputs)
	if (locale === "ja") return ja_manager_shot_main(inputs)
	return en_manager_shot_main(inputs)
});
