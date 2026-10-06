/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Creator_Verified_TextInputs */

const en_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You have the Trusted badge on your profile and mods, and you can upload larger files.`)
};

const es_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tienes la insignia «De confianza» en tu perfil y tus mods, y puedes subir archivos más grandes.`)
};

const de_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast das Abzeichen „Vertrauenswürdig“ auf deinem Profil und deinen Mods und kannst größere Dateien hochladen.`)
};

const fr_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez le badge « De confiance » sur votre profil et vos mods, et vous pouvez envoyer des fichiers plus volumineux.`)
};

const it_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai il badge «Affidabile» sul profilo e sulle tue mod e puoi caricare file più grandi.`)
};

const nl_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt de badge ‘Vertrouwd’ op je profiel en je mods en je kunt grotere bestanden uploaden.`)
};

const pl_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masz odznakę „Zaufany” na profilu i przy swoich modach oraz możesz przesyłać większe pliki.`)
};

const pt_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você tem o selo “De confiança” no perfil e nos seus mods e pode enviar arquivos maiores.`)
};

const ru_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У вас есть значок «Проверенный» в профиле и на ваших модах, и вы можете загружать файлы большего размера.`)
};

const sv_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har märket ”Betrodd” på din profil och dina moddar och kan ladda upp större filer.`)
};

const tr_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profilinde ve modlarında “Güvenilir” rozeti var ve daha büyük dosyalar yükleyebilirsin.`)
};

const zh_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的资料和模组上带有“可信”标记，并且可以上传更大的文件。`)
};

const ja_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロフィールと MOD に「信頼済み」バッジが表示され、より大きなファイルをアップロードできます。`)
};

/**
* | output |
* | --- |
* | "You have the Trusted badge on your profile and mods, and you can upload larger files." |
*
* @param {Settings_Creator_Verified_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_creator_verified_text = /** @type {((inputs?: Settings_Creator_Verified_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Creator_Verified_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_creator_verified_text(inputs)
	if (locale === "de") return de_settings_creator_verified_text(inputs)
	if (locale === "fr") return fr_settings_creator_verified_text(inputs)
	if (locale === "it") return it_settings_creator_verified_text(inputs)
	if (locale === "nl") return nl_settings_creator_verified_text(inputs)
	if (locale === "pl") return pl_settings_creator_verified_text(inputs)
	if (locale === "pt") return pt_settings_creator_verified_text(inputs)
	if (locale === "ru") return ru_settings_creator_verified_text(inputs)
	if (locale === "sv") return sv_settings_creator_verified_text(inputs)
	if (locale === "tr") return tr_settings_creator_verified_text(inputs)
	if (locale === "zh") return zh_settings_creator_verified_text(inputs)
	if (locale === "ja") return ja_settings_creator_verified_text(inputs)
	return en_settings_creator_verified_text(inputs)
});
