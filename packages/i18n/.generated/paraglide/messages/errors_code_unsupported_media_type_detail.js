/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Unsupported_Media_Type_DetailInputs */

const en_errors_code_unsupported_media_type_detail = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We can’t accept this kind of file. Check the allowed formats and try again.`)
};

const es_errors_code_unsupported_media_type_detail = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No podemos aceptar este tipo de archivo. Revisa los formatos permitidos e inténtalo de nuevo.`)
};

const de_errors_code_unsupported_media_type_detail = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Art von Datei können wir nicht annehmen. Prüfe die erlaubten Formate und versuch es erneut.`)
};

const fr_errors_code_unsupported_media_type_detail = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nous ne pouvons pas accepter ce type de fichier. Vérifiez les formats autorisés et réessayez.`)
};

const it_errors_code_unsupported_media_type_detail = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non possiamo accettare questo tipo di file. Controlla i formati consentiti e riprova.`)
};

const nl_errors_code_unsupported_media_type_detail = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit soort bestand kunnen we niet accepteren. Bekijk de toegestane formaten en probeer het opnieuw.`)
};

const pl_errors_code_unsupported_media_type_detail = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie możemy przyjąć tego rodzaju pliku. Sprawdź dozwolone formaty i spróbuj ponownie.`)
};

const pt_errors_code_unsupported_media_type_detail = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não podemos aceitar esse tipo de arquivo. Confira os formatos permitidos e tente de novo.`)
};

const ru_errors_code_unsupported_media_type_detail = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мы не можем принять файл такого типа. Проверьте допустимые форматы и попробуйте снова.`)
};

const sv_errors_code_unsupported_media_type_detail = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vi kan inte ta emot den här typen av fil. Kontrollera de tillåtna formaten och försök igen.`)
};

const tr_errors_code_unsupported_media_type_detail = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu tür bir dosyayı kabul edemiyoruz. İzin verilen biçimleri kontrol edip tekrar dene.`)
};

const zh_errors_code_unsupported_media_type_detail = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我们无法接收这种类型的文件。请查看允许的格式后重试。`)
};

const ja_errors_code_unsupported_media_type_detail = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この種類のファイルは受け付けていません。使用できる形式を確認して、もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "We can’t accept this kind of file. Check the allowed formats and try again." |
*
* @param {Errors_Code_Unsupported_Media_Type_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_unsupported_media_type_detail = /** @type {((inputs?: Errors_Code_Unsupported_Media_Type_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Unsupported_Media_Type_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_unsupported_media_type_detail(inputs)
	if (locale === "de") return de_errors_code_unsupported_media_type_detail(inputs)
	if (locale === "fr") return fr_errors_code_unsupported_media_type_detail(inputs)
	if (locale === "it") return it_errors_code_unsupported_media_type_detail(inputs)
	if (locale === "nl") return nl_errors_code_unsupported_media_type_detail(inputs)
	if (locale === "pl") return pl_errors_code_unsupported_media_type_detail(inputs)
	if (locale === "pt") return pt_errors_code_unsupported_media_type_detail(inputs)
	if (locale === "ru") return ru_errors_code_unsupported_media_type_detail(inputs)
	if (locale === "sv") return sv_errors_code_unsupported_media_type_detail(inputs)
	if (locale === "tr") return tr_errors_code_unsupported_media_type_detail(inputs)
	if (locale === "zh") return zh_errors_code_unsupported_media_type_detail(inputs)
	if (locale === "ja") return ja_errors_code_unsupported_media_type_detail(inputs)
	return en_errors_code_unsupported_media_type_detail(inputs)
});
