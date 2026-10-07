/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ query: NonNullable<unknown> }} Upload_Game_Builds_None_FoundInputs */

const en_upload_game_builds_none_found = /** @type {(inputs: Upload_Game_Builds_None_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No build matches “${i?.query}”.`)
};

const es_upload_game_builds_none_found = /** @type {(inputs: Upload_Game_Builds_None_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ninguna build coincide con «${i?.query}».`)
};

const de_upload_game_builds_none_found = /** @type {(inputs: Upload_Game_Builds_None_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kein Build passt zu „${i?.query}“.`)
};

const fr_upload_game_builds_none_found = /** @type {(inputs: Upload_Game_Builds_None_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aucun build ne correspond à « ${i?.query} ».`)
};

const it_upload_game_builds_none_found = /** @type {(inputs: Upload_Game_Builds_None_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nessuna build corrisponde a «${i?.query}».`)
};

const nl_upload_game_builds_none_found = /** @type {(inputs: Upload_Game_Builds_None_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Geen build komt overeen met “${i?.query}”.`)
};

const pl_upload_game_builds_none_found = /** @type {(inputs: Upload_Game_Builds_None_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Żaden build nie pasuje do „${i?.query}”.`)
};

const pt_upload_game_builds_none_found = /** @type {(inputs: Upload_Game_Builds_None_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nenhuma build corresponde a “${i?.query}”.`)
};

const ru_upload_game_builds_none_found = /** @type {(inputs: Upload_Game_Builds_None_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Нет сборок, подходящих под «${i?.query}».`)
};

const sv_upload_game_builds_none_found = /** @type {(inputs: Upload_Game_Builds_None_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingen version matchar ”${i?.query}”.`)
};

const tr_upload_game_builds_none_found = /** @type {(inputs: Upload_Game_Builds_None_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.query}” ile eşleşen sürüm yok.`)
};

const zh_upload_game_builds_none_found = /** @type {(inputs: Upload_Game_Builds_None_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`没有与“${i?.query}”匹配的版本。`)
};

const ja_upload_game_builds_none_found = /** @type {(inputs: Upload_Game_Builds_None_FoundInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.query}」に一致するビルドはありません。`)
};

/**
* | output |
* | --- |
* | "No build matches “{query}”." |
*
* @param {Upload_Game_Builds_None_FoundInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_game_builds_none_found = /** @type {((inputs: Upload_Game_Builds_None_FoundInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Game_Builds_None_FoundInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_game_builds_none_found(inputs)
	if (locale === "de") return de_upload_game_builds_none_found(inputs)
	if (locale === "fr") return fr_upload_game_builds_none_found(inputs)
	if (locale === "it") return it_upload_game_builds_none_found(inputs)
	if (locale === "nl") return nl_upload_game_builds_none_found(inputs)
	if (locale === "pl") return pl_upload_game_builds_none_found(inputs)
	if (locale === "pt") return pt_upload_game_builds_none_found(inputs)
	if (locale === "ru") return ru_upload_game_builds_none_found(inputs)
	if (locale === "sv") return sv_upload_game_builds_none_found(inputs)
	if (locale === "tr") return tr_upload_game_builds_none_found(inputs)
	if (locale === "zh") return zh_upload_game_builds_none_found(inputs)
	if (locale === "ja") return ja_upload_game_builds_none_found(inputs)
	return en_upload_game_builds_none_found(inputs)
});
