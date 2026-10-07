/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Upload_Game_Builds_MaxInputs */

const en_upload_game_builds_max = /** @type {(inputs: Upload_Game_Builds_MaxInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You can pick up to ${i?.max} builds.`)
};

const es_upload_game_builds_max = /** @type {(inputs: Upload_Game_Builds_MaxInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Puedes elegir hasta ${i?.max} builds.`)
};

const de_upload_game_builds_max = /** @type {(inputs: Upload_Game_Builds_MaxInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du kannst bis zu ${i?.max} Builds auswählen.`)
};

const fr_upload_game_builds_max = /** @type {(inputs: Upload_Game_Builds_MaxInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vous pouvez choisir jusqu’à ${i?.max} builds.`)
};

const it_upload_game_builds_max = /** @type {(inputs: Upload_Game_Builds_MaxInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Puoi scegliere fino a ${i?.max} build.`)
};

const nl_upload_game_builds_max = /** @type {(inputs: Upload_Game_Builds_MaxInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je kunt maximaal ${i?.max} builds kiezen.`)
};

const pl_upload_game_builds_max = /** @type {(inputs: Upload_Game_Builds_MaxInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Możesz wybrać maksymalnie ${i?.max} buildów.`)
};

const pt_upload_game_builds_max = /** @type {(inputs: Upload_Game_Builds_MaxInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Você pode escolher até ${i?.max} builds.`)
};

const ru_upload_game_builds_max = /** @type {(inputs: Upload_Game_Builds_MaxInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Можно выбрать не более ${i?.max} сборок.`)
};

const sv_upload_game_builds_max = /** @type {(inputs: Upload_Game_Builds_MaxInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du kan välja högst ${i?.max} versioner.`)
};

const tr_upload_game_builds_max = /** @type {(inputs: Upload_Game_Builds_MaxInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En fazla ${i?.max} sürüm seçebilirsin.`)
};

const zh_upload_game_builds_max = /** @type {(inputs: Upload_Game_Builds_MaxInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最多可选择 ${i?.max} 个版本。`)
};

const ja_upload_game_builds_max = /** @type {(inputs: Upload_Game_Builds_MaxInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`選べるビルドは最大${i?.max}件です。`)
};

/**
* | output |
* | --- |
* | "You can pick up to {max} builds." |
*
* @param {Upload_Game_Builds_MaxInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_game_builds_max = /** @type {((inputs: Upload_Game_Builds_MaxInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Game_Builds_MaxInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_game_builds_max(inputs)
	if (locale === "de") return de_upload_game_builds_max(inputs)
	if (locale === "fr") return fr_upload_game_builds_max(inputs)
	if (locale === "it") return it_upload_game_builds_max(inputs)
	if (locale === "nl") return nl_upload_game_builds_max(inputs)
	if (locale === "pl") return pl_upload_game_builds_max(inputs)
	if (locale === "pt") return pt_upload_game_builds_max(inputs)
	if (locale === "ru") return ru_upload_game_builds_max(inputs)
	if (locale === "sv") return sv_upload_game_builds_max(inputs)
	if (locale === "tr") return tr_upload_game_builds_max(inputs)
	if (locale === "zh") return zh_upload_game_builds_max(inputs)
	if (locale === "ja") return ja_upload_game_builds_max(inputs)
	return en_upload_game_builds_max(inputs)
});
