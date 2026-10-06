/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Import_Step3_TitleInputs */

const en_builds_import_step3_title = /** @type {(inputs: Builds_Import_Step3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Place it in the game`)
};

const es_builds_import_step3_title = /** @type {(inputs: Builds_Import_Step3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Colócala en el juego`)
};

const de_builds_import_step3_title = /** @type {(inputs: Builds_Import_Step3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Im Spiel platzieren`)
};

const fr_builds_import_step3_title = /** @type {(inputs: Builds_Import_Step3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La placer en jeu`)
};

const it_builds_import_step3_title = /** @type {(inputs: Builds_Import_Step3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Piazzala nel gioco`)
};

const nl_builds_import_step3_title = /** @type {(inputs: Builds_Import_Step3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plaats hem in de game`)
};

const pl_builds_import_step3_title = /** @type {(inputs: Builds_Import_Step3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Postaw go w grze`)
};

const pt_builds_import_step3_title = /** @type {(inputs: Builds_Import_Step3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posicione no jogo`)
};

const ru_builds_import_step3_title = /** @type {(inputs: Builds_Import_Step3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поставьте её в игре`)
};

const sv_builds_import_step3_title = /** @type {(inputs: Builds_Import_Step3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Placera det i spelet`)
};

const tr_builds_import_step3_title = /** @type {(inputs: Builds_Import_Step3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyunda yerleştir`)
};

const zh_builds_import_step3_title = /** @type {(inputs: Builds_Import_Step3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在游戏中放置`)
};

const ja_builds_import_step3_title = /** @type {(inputs: Builds_Import_Step3_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲーム内に配置する`)
};

/**
* | output |
* | --- |
* | "Place it in the game" |
*
* @param {Builds_Import_Step3_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_import_step3_title = /** @type {((inputs?: Builds_Import_Step3_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Import_Step3_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_import_step3_title(inputs)
	if (locale === "de") return de_builds_import_step3_title(inputs)
	if (locale === "fr") return fr_builds_import_step3_title(inputs)
	if (locale === "it") return it_builds_import_step3_title(inputs)
	if (locale === "nl") return nl_builds_import_step3_title(inputs)
	if (locale === "pl") return pl_builds_import_step3_title(inputs)
	if (locale === "pt") return pt_builds_import_step3_title(inputs)
	if (locale === "ru") return ru_builds_import_step3_title(inputs)
	if (locale === "sv") return sv_builds_import_step3_title(inputs)
	if (locale === "tr") return tr_builds_import_step3_title(inputs)
	if (locale === "zh") return zh_builds_import_step3_title(inputs)
	if (locale === "ja") return ja_builds_import_step3_title(inputs)
	return en_builds_import_step3_title(inputs)
});
