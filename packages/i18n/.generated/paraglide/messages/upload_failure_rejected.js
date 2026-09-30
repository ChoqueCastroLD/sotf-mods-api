/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Failure_RejectedInputs */

const en_upload_failure_rejected = /** @type {(inputs: Upload_Failure_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The file was refused by the checks.`)
};

const es_upload_failure_rejected = /** @type {(inputs: Upload_Failure_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las comprobaciones rechazaron el archivo.`)
};

const de_upload_failure_rejected = /** @type {(inputs: Upload_Failure_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Checks haben die Datei abgelehnt.`)
};

const fr_upload_failure_rejected = /** @type {(inputs: Upload_Failure_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les vérifications ont refusé le fichier.`)
};

const it_upload_failure_rejected = /** @type {(inputs: Upload_Failure_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I controlli hanno rifiutato il file.`)
};

const nl_upload_failure_rejected = /** @type {(inputs: Upload_Failure_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De checks hebben het bestand geweigerd.`)
};

const pl_upload_failure_rejected = /** @type {(inputs: Upload_Failure_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrole odrzuciły plik.`)
};

const pt_upload_failure_rejected = /** @type {(inputs: Upload_Failure_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As verificações recusaram o arquivo.`)
};

const ru_upload_failure_rejected = /** @type {(inputs: Upload_Failure_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверки отклонили файл.`)
};

const sv_upload_failure_rejected = /** @type {(inputs: Upload_Failure_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrollerna avvisade filen.`)
};

const tr_upload_failure_rejected = /** @type {(inputs: Upload_Failure_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontroller dosyayı reddetti.`)
};

const zh_upload_failure_rejected = /** @type {(inputs: Upload_Failure_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件未通过检查。`)
};

const ja_upload_failure_rejected = /** @type {(inputs: Upload_Failure_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チェックによってファイルが却下されました。`)
};

/**
* | output |
* | --- |
* | "The file was refused by the checks." |
*
* @param {Upload_Failure_RejectedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_failure_rejected = /** @type {((inputs?: Upload_Failure_RejectedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Failure_RejectedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_failure_rejected(inputs)
	if (locale === "de") return de_upload_failure_rejected(inputs)
	if (locale === "fr") return fr_upload_failure_rejected(inputs)
	if (locale === "it") return it_upload_failure_rejected(inputs)
	if (locale === "nl") return nl_upload_failure_rejected(inputs)
	if (locale === "pl") return pl_upload_failure_rejected(inputs)
	if (locale === "pt") return pt_upload_failure_rejected(inputs)
	if (locale === "ru") return ru_upload_failure_rejected(inputs)
	if (locale === "sv") return sv_upload_failure_rejected(inputs)
	if (locale === "tr") return tr_upload_failure_rejected(inputs)
	if (locale === "zh") return zh_upload_failure_rejected(inputs)
	if (locale === "ja") return ja_upload_failure_rejected(inputs)
	return en_upload_failure_rejected(inputs)
});
