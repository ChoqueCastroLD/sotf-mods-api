/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Creator_Verified_TextInputs */

const en_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your mods carry the verified mark and you can upload larger files.`)
};

const es_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus mods llevan la marca de verificado y puedes subir archivos más grandes.`)
};

const de_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Mods tragen das Verifiziert-Zeichen und du kannst größere Dateien hochladen.`)
};

const fr_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos mods portent la marque « vérifié » et vous pouvez envoyer des fichiers plus lourds.`)
};

const it_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le tue mod hanno il segno di verifica e puoi caricare file più grandi.`)
};

const nl_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je mods dragen het verificatiekenmerk en je kunt grotere bestanden uploaden.`)
};

const pl_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje mody mają znak weryfikacji i możesz przesyłać większe pliki.`)
};

const pt_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seus mods têm a marca de verificado e você pode enviar arquivos maiores.`)
};

const ru_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На ваших модах стоит отметка проверки, и вы можете загружать файлы побольше.`)
};

const sv_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina moddar bär verifieringsmärket och du kan ladda upp större filer.`)
};

const tr_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modların doğrulama işaretini taşır ve daha büyük dosyalar yükleyebilirsin.`)
};

const zh_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组带有认证标记，并且你可以上传更大的文件。`)
};

const ja_settings_creator_verified_text = /** @type {(inputs: Settings_Creator_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのMODには認証マークが付き、より大きなファイルをアップロードできます。`)
};

/**
* | output |
* | --- |
* | "Your mods carry the verified mark and you can upload larger files." |
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
