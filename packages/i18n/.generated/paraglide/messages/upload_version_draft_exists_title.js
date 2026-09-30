/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Version_Draft_Exists_TitleInputs */

const en_upload_version_draft_exists_title = /** @type {(inputs: Upload_Version_Draft_Exists_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You already started a version for this mod.`)
};

const es_upload_version_draft_exists_title = /** @type {(inputs: Upload_Version_Draft_Exists_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya empezaste una versión para este mod.`)
};

const de_upload_version_draft_exists_title = /** @type {(inputs: Upload_Version_Draft_Exists_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast schon eine Version für diesen Mod begonnen.`)
};

const fr_upload_version_draft_exists_title = /** @type {(inputs: Upload_Version_Draft_Exists_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez déjà commencé une version de ce mod.`)
};

const it_upload_version_draft_exists_title = /** @type {(inputs: Upload_Version_Draft_Exists_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai già iniziato una versione per questa mod.`)
};

const nl_upload_version_draft_exists_title = /** @type {(inputs: Upload_Version_Draft_Exists_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je bent al een versie voor deze mod begonnen.`)
};

const pl_upload_version_draft_exists_title = /** @type {(inputs: Upload_Version_Draft_Exists_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masz już rozpoczętą wersję tego moda.`)
};

const pt_upload_version_draft_exists_title = /** @type {(inputs: Upload_Version_Draft_Exists_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você já começou uma versão para este mod.`)
};

const ru_upload_version_draft_exists_title = /** @type {(inputs: Upload_Version_Draft_Exists_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы уже начали версию для этого мода.`)
};

const sv_upload_version_draft_exists_title = /** @type {(inputs: Upload_Version_Draft_Exists_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har redan påbörjat en version för den här modden.`)
};

const tr_upload_version_draft_exists_title = /** @type {(inputs: Upload_Version_Draft_Exists_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu mod için zaten bir sürüme başladın.`)
};

const zh_upload_version_draft_exists_title = /** @type {(inputs: Upload_Version_Draft_Exists_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已为这个模组开始了一个版本。`)
};

const ja_upload_version_draft_exists_title = /** @type {(inputs: Upload_Version_Draft_Exists_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このMODのバージョンはすでに作成中です。`)
};

/**
* | output |
* | --- |
* | "You already started a version for this mod." |
*
* @param {Upload_Version_Draft_Exists_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_version_draft_exists_title = /** @type {((inputs?: Upload_Version_Draft_Exists_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Version_Draft_Exists_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_version_draft_exists_title(inputs)
	if (locale === "de") return de_upload_version_draft_exists_title(inputs)
	if (locale === "fr") return fr_upload_version_draft_exists_title(inputs)
	if (locale === "it") return it_upload_version_draft_exists_title(inputs)
	if (locale === "nl") return nl_upload_version_draft_exists_title(inputs)
	if (locale === "pl") return pl_upload_version_draft_exists_title(inputs)
	if (locale === "pt") return pt_upload_version_draft_exists_title(inputs)
	if (locale === "ru") return ru_upload_version_draft_exists_title(inputs)
	if (locale === "sv") return sv_upload_version_draft_exists_title(inputs)
	if (locale === "tr") return tr_upload_version_draft_exists_title(inputs)
	if (locale === "zh") return zh_upload_version_draft_exists_title(inputs)
	if (locale === "ja") return ja_upload_version_draft_exists_title(inputs)
	return en_upload_version_draft_exists_title(inputs)
});
