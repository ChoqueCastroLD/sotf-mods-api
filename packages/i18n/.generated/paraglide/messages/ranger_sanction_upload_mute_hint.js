/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_Upload_Mute_HintInputs */

const en_ranger_sanction_upload_mute_hint = /** @type {(inputs: Ranger_Sanction_Upload_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can’t publish mods, versions or builds.`)
};

const es_ranger_sanction_upload_mute_hint = /** @type {(inputs: Ranger_Sanction_Upload_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No puede publicar mods, versiones ni builds.`)
};

const de_ranger_sanction_upload_mute_hint = /** @type {(inputs: Ranger_Sanction_Upload_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kann keine Mods, Versionen oder Builds veröffentlichen.`)
};

const fr_ranger_sanction_upload_mute_hint = /** @type {(inputs: Ranger_Sanction_Upload_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne peut plus publier de mods, de versions ni de builds.`)
};

const it_ranger_sanction_upload_mute_hint = /** @type {(inputs: Ranger_Sanction_Upload_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non può pubblicare mod, versioni o build.`)
};

const nl_ranger_sanction_upload_mute_hint = /** @type {(inputs: Ranger_Sanction_Upload_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan geen mods, versies of builds publiceren.`)
};

const pl_ranger_sanction_upload_mute_hint = /** @type {(inputs: Ranger_Sanction_Upload_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie może publikować modów, wersji ani buildów.`)
};

const pt_ranger_sanction_upload_mute_hint = /** @type {(inputs: Ranger_Sanction_Upload_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não pode publicar mods, versões nem builds.`)
};

const ru_ranger_sanction_upload_mute_hint = /** @type {(inputs: Ranger_Sanction_Upload_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не сможет публиковать моды, версии и постройки.`)
};

const sv_ranger_sanction_upload_mute_hint = /** @type {(inputs: Ranger_Sanction_Upload_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan inte publicera moddar, versioner eller byggen.`)
};

const tr_ranger_sanction_upload_mute_hint = /** @type {(inputs: Ranger_Sanction_Upload_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod, sürüm veya yapı yayımlayamaz.`)
};

const zh_ranger_sanction_upload_mute_hint = /** @type {(inputs: Ranger_Sanction_Upload_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法发布模组、版本或建筑。`)
};

const ja_ranger_sanction_upload_mute_hint = /** @type {(inputs: Ranger_Sanction_Upload_Mute_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD、バージョン、建築を公開できません。`)
};

/**
* | output |
* | --- |
* | "Can’t publish mods, versions or builds." |
*
* @param {Ranger_Sanction_Upload_Mute_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_upload_mute_hint = /** @type {((inputs?: Ranger_Sanction_Upload_Mute_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_Upload_Mute_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_upload_mute_hint(inputs)
	if (locale === "de") return de_ranger_sanction_upload_mute_hint(inputs)
	if (locale === "fr") return fr_ranger_sanction_upload_mute_hint(inputs)
	if (locale === "it") return it_ranger_sanction_upload_mute_hint(inputs)
	if (locale === "nl") return nl_ranger_sanction_upload_mute_hint(inputs)
	if (locale === "pl") return pl_ranger_sanction_upload_mute_hint(inputs)
	if (locale === "pt") return pt_ranger_sanction_upload_mute_hint(inputs)
	if (locale === "ru") return ru_ranger_sanction_upload_mute_hint(inputs)
	if (locale === "sv") return sv_ranger_sanction_upload_mute_hint(inputs)
	if (locale === "tr") return tr_ranger_sanction_upload_mute_hint(inputs)
	if (locale === "zh") return zh_ranger_sanction_upload_mute_hint(inputs)
	if (locale === "ja") return ja_ranger_sanction_upload_mute_hint(inputs)
	return en_ranger_sanction_upload_mute_hint(inputs)
});
