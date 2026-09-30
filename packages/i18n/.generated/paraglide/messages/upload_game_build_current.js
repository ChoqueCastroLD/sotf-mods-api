/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ label: NonNullable<unknown> }} Upload_Game_Build_CurrentInputs */

const en_upload_game_build_current = /** @type {(inputs: Upload_Game_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} (current)`)
};

const es_upload_game_build_current = /** @type {(inputs: Upload_Game_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} (actual)`)
};

const de_upload_game_build_current = /** @type {(inputs: Upload_Game_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} (aktuell)`)
};

const fr_upload_game_build_current = /** @type {(inputs: Upload_Game_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} (actuel)`)
};

const it_upload_game_build_current = /** @type {(inputs: Upload_Game_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} (attuale)`)
};

const nl_upload_game_build_current = /** @type {(inputs: Upload_Game_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} (huidig)`)
};

const pl_upload_game_build_current = /** @type {(inputs: Upload_Game_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} (bieżący)`)
};

const pt_upload_game_build_current = /** @type {(inputs: Upload_Game_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} (atual)`)
};

const ru_upload_game_build_current = /** @type {(inputs: Upload_Game_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} (текущая)`)
};

const sv_upload_game_build_current = /** @type {(inputs: Upload_Game_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} (aktuell)`)
};

const tr_upload_game_build_current = /** @type {(inputs: Upload_Game_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} (güncel)`)
};

const zh_upload_game_build_current = /** @type {(inputs: Upload_Game_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label}（当前）`)
};

const ja_upload_game_build_current = /** @type {(inputs: Upload_Game_Build_CurrentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label}（最新）`)
};

/**
* | output |
* | --- |
* | "{label} (current)" |
*
* @param {Upload_Game_Build_CurrentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_game_build_current = /** @type {((inputs: Upload_Game_Build_CurrentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Game_Build_CurrentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_game_build_current(inputs)
	if (locale === "de") return de_upload_game_build_current(inputs)
	if (locale === "fr") return fr_upload_game_build_current(inputs)
	if (locale === "it") return it_upload_game_build_current(inputs)
	if (locale === "nl") return nl_upload_game_build_current(inputs)
	if (locale === "pl") return pl_upload_game_build_current(inputs)
	if (locale === "pt") return pt_upload_game_build_current(inputs)
	if (locale === "ru") return ru_upload_game_build_current(inputs)
	if (locale === "sv") return sv_upload_game_build_current(inputs)
	if (locale === "tr") return tr_upload_game_build_current(inputs)
	if (locale === "zh") return zh_upload_game_build_current(inputs)
	if (locale === "ja") return ja_upload_game_build_current(inputs)
	return en_upload_game_build_current(inputs)
});
