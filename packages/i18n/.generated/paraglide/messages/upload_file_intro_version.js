/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, manifestId: NonNullable<unknown>, version: NonNullable<unknown> }} Upload_File_Intro_VersionInputs */

const en_upload_file_intro_version = /** @type {(inputs: Upload_File_Intro_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Upload the new file of ${i?.name}. Its manifest id must be ${i?.manifestId} and its version greater than ${i?.version}.`)
};

const es_upload_file_intro_version = /** @type {(inputs: Upload_File_Intro_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sube el nuevo archivo de ${i?.name}. Su id de manifest debe ser ${i?.manifestId} y su versión mayor que ${i?.version}.`)
};

const de_upload_file_intro_version = /** @type {(inputs: Upload_File_Intro_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lade die neue Datei von ${i?.name} hoch. Ihre Manifest-ID muss ${i?.manifestId} sein und ihre Version größer als ${i?.version}.`)
};

const fr_upload_file_intro_version = /** @type {(inputs: Upload_File_Intro_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Envoyez le nouveau fichier de ${i?.name}. Son id de manifest doit être ${i?.manifestId} et sa version supérieure à ${i?.version}.`)
};

const it_upload_file_intro_version = /** @type {(inputs: Upload_File_Intro_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Carica il nuovo file di ${i?.name}. L’id del manifest deve essere ${i?.manifestId} e la versione maggiore di ${i?.version}.`)
};

const nl_upload_file_intro_version = /** @type {(inputs: Upload_File_Intro_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Upload het nieuwe bestand van ${i?.name}. Het manifest-id moet ${i?.manifestId} zijn en de versie hoger dan ${i?.version}.`)
};

const pl_upload_file_intro_version = /** @type {(inputs: Upload_File_Intro_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wyślij nowy plik moda ${i?.name}. Jego identyfikator manifestu musi być ${i?.manifestId}, a wersja wyższa niż ${i?.version}.`)
};

const pt_upload_file_intro_version = /** @type {(inputs: Upload_File_Intro_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Envie o novo arquivo de ${i?.name}. O id do manifest deve ser ${i?.manifestId} e a versão maior que ${i?.version}.`)
};

const ru_upload_file_intro_version = /** @type {(inputs: Upload_File_Intro_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Загрузите новый файл для «${i?.name}». Его id в манифесте должен быть ${i?.manifestId}, а версия — выше ${i?.version}.`)
};

const sv_upload_file_intro_version = /** @type {(inputs: Upload_File_Intro_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ladda upp den nya filen för ${i?.name}. Manifest-id måste vara ${i?.manifestId} och versionen högre än ${i?.version}.`)
};

const tr_upload_file_intro_version = /** @type {(inputs: Upload_File_Intro_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} için yeni dosyayı yükle. Manifest kimliği ${i?.manifestId} olmalı ve sürümü ${i?.version} sürümünden büyük olmalı.`)
};

const zh_upload_file_intro_version = /** @type {(inputs: Upload_File_Intro_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`上传 ${i?.name} 的新文件。清单 ID 必须是 ${i?.manifestId}，版本需高于 ${i?.version}。`)
};

const ja_upload_file_intro_version = /** @type {(inputs: Upload_File_Intro_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の新しいファイルをアップロードしてください。マニフェストIDは ${i?.manifestId}、バージョンは ${i?.version} より大きい必要があります。`)
};

/**
* | output |
* | --- |
* | "Upload the new file of {name}. Its manifest id must be {manifestId} and its version greater than {version}." |
*
* @param {Upload_File_Intro_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_file_intro_version = /** @type {((inputs: Upload_File_Intro_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_File_Intro_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_file_intro_version(inputs)
	if (locale === "de") return de_upload_file_intro_version(inputs)
	if (locale === "fr") return fr_upload_file_intro_version(inputs)
	if (locale === "it") return it_upload_file_intro_version(inputs)
	if (locale === "nl") return nl_upload_file_intro_version(inputs)
	if (locale === "pl") return pl_upload_file_intro_version(inputs)
	if (locale === "pt") return pt_upload_file_intro_version(inputs)
	if (locale === "ru") return ru_upload_file_intro_version(inputs)
	if (locale === "sv") return sv_upload_file_intro_version(inputs)
	if (locale === "tr") return tr_upload_file_intro_version(inputs)
	if (locale === "zh") return zh_upload_file_intro_version(inputs)
	if (locale === "ja") return ja_upload_file_intro_version(inputs)
	return en_upload_file_intro_version(inputs)
});
