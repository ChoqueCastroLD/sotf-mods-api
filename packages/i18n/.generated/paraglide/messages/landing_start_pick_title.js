/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Start_Pick_TitleInputs */

const en_landing_start_pick_title = /** @type {(inputs: Landing_Start_Pick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pick mods or a Kit`)
};

const es_landing_start_pick_title = /** @type {(inputs: Landing_Start_Pick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige mods o un Kit`)
};

const de_landing_start_pick_title = /** @type {(inputs: Landing_Start_Pick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods oder ein Kit wählen`)
};

const fr_landing_start_pick_title = /** @type {(inputs: Landing_Start_Pick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez des mods ou un Kit`)
};

const it_landing_start_pick_title = /** @type {(inputs: Landing_Start_Pick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli mod o un Kit`)
};

const nl_landing_start_pick_title = /** @type {(inputs: Landing_Start_Pick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies mods of een Kit`)
};

const pl_landing_start_pick_title = /** @type {(inputs: Landing_Start_Pick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz mody lub zestaw`)
};

const pt_landing_start_pick_title = /** @type {(inputs: Landing_Start_Pick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha mods ou um Kit`)
};

const ru_landing_start_pick_title = /** @type {(inputs: Landing_Start_Pick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите моды или набор`)
};

const sv_landing_start_pick_title = /** @type {(inputs: Landing_Start_Pick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj moddar eller ett kit`)
};

const tr_landing_start_pick_title = /** @type {(inputs: Landing_Start_Pick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod ya da kit seç`)
};

const zh_landing_start_pick_title = /** @type {(inputs: Landing_Start_Pick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`挑选模组或套装`)
};

const ja_landing_start_pick_title = /** @type {(inputs: Landing_Start_Pick_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODかキットを選ぶ`)
};

/**
* | output |
* | --- |
* | "Pick mods or a Kit" |
*
* @param {Landing_Start_Pick_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_start_pick_title = /** @type {((inputs?: Landing_Start_Pick_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Start_Pick_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_start_pick_title(inputs)
	if (locale === "de") return de_landing_start_pick_title(inputs)
	if (locale === "fr") return fr_landing_start_pick_title(inputs)
	if (locale === "it") return it_landing_start_pick_title(inputs)
	if (locale === "nl") return nl_landing_start_pick_title(inputs)
	if (locale === "pl") return pl_landing_start_pick_title(inputs)
	if (locale === "pt") return pt_landing_start_pick_title(inputs)
	if (locale === "ru") return ru_landing_start_pick_title(inputs)
	if (locale === "sv") return sv_landing_start_pick_title(inputs)
	if (locale === "tr") return tr_landing_start_pick_title(inputs)
	if (locale === "zh") return zh_landing_start_pick_title(inputs)
	if (locale === "ja") return ja_landing_start_pick_title(inputs)
	return en_landing_start_pick_title(inputs)
});
