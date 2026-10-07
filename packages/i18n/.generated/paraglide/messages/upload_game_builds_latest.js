/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ label: NonNullable<unknown> }} Upload_Game_Builds_LatestInputs */

const en_upload_game_builds_latest = /** @type {(inputs: Upload_Game_Builds_LatestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Add latest (${i?.label})`)
};

const es_upload_game_builds_latest = /** @type {(inputs: Upload_Game_Builds_LatestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Añadir la última (${i?.label})`)
};

const de_upload_game_builds_latest = /** @type {(inputs: Upload_Game_Builds_LatestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Neueste hinzufügen (${i?.label})`)
};

const fr_upload_game_builds_latest = /** @type {(inputs: Upload_Game_Builds_LatestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ajouter le dernier (${i?.label})`)
};

const it_upload_game_builds_latest = /** @type {(inputs: Upload_Game_Builds_LatestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aggiungi l’ultima (${i?.label})`)
};

const nl_upload_game_builds_latest = /** @type {(inputs: Upload_Game_Builds_LatestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nieuwste toevoegen (${i?.label})`)
};

const pl_upload_game_builds_latest = /** @type {(inputs: Upload_Game_Builds_LatestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dodaj najnowszy (${i?.label})`)
};

const pt_upload_game_builds_latest = /** @type {(inputs: Upload_Game_Builds_LatestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Adicionar a mais recente (${i?.label})`)
};

const ru_upload_game_builds_latest = /** @type {(inputs: Upload_Game_Builds_LatestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Добавить последнюю (${i?.label})`)
};

const sv_upload_game_builds_latest = /** @type {(inputs: Upload_Game_Builds_LatestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lägg till senaste (${i?.label})`)
};

const tr_upload_game_builds_latest = /** @type {(inputs: Upload_Game_Builds_LatestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En yeniyi ekle (${i?.label})`)
};

const zh_upload_game_builds_latest = /** @type {(inputs: Upload_Game_Builds_LatestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`添加最新版本（${i?.label}）`)
};

const ja_upload_game_builds_latest = /** @type {(inputs: Upload_Game_Builds_LatestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最新を追加（${i?.label}）`)
};

/**
* | output |
* | --- |
* | "Add latest ({label})" |
*
* @param {Upload_Game_Builds_LatestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_game_builds_latest = /** @type {((inputs: Upload_Game_Builds_LatestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Game_Builds_LatestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_game_builds_latest(inputs)
	if (locale === "de") return de_upload_game_builds_latest(inputs)
	if (locale === "fr") return fr_upload_game_builds_latest(inputs)
	if (locale === "it") return it_upload_game_builds_latest(inputs)
	if (locale === "nl") return nl_upload_game_builds_latest(inputs)
	if (locale === "pl") return pl_upload_game_builds_latest(inputs)
	if (locale === "pt") return pt_upload_game_builds_latest(inputs)
	if (locale === "ru") return ru_upload_game_builds_latest(inputs)
	if (locale === "sv") return sv_upload_game_builds_latest(inputs)
	if (locale === "tr") return tr_upload_game_builds_latest(inputs)
	if (locale === "zh") return zh_upload_game_builds_latest(inputs)
	if (locale === "ja") return ja_upload_game_builds_latest(inputs)
	return en_upload_game_builds_latest(inputs)
});
