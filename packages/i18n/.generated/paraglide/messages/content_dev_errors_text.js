/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Errors_TextInputs */

const en_content_dev_errors_text = /** @type {(inputs: Content_Dev_Errors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The code field of an error is one of these. Each problem’s type URI points to its row here.`)
};

const es_content_dev_errors_text = /** @type {(inputs: Content_Dev_Errors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El campo code de un error es uno de estos. La URI type de cada problema apunta a su fila aquí.`)
};

const de_content_dev_errors_text = /** @type {(inputs: Content_Dev_Errors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Feld code eines Fehlers ist einer dieser Werte. Die type-URI jedes Problems verweist auf seine Zeile hier.`)
};

const fr_content_dev_errors_text = /** @type {(inputs: Content_Dev_Errors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le champ code d’une erreur prend l’une de ces valeurs. L’URI type de chaque problème pointe vers sa ligne ici.`)
};

const it_content_dev_errors_text = /** @type {(inputs: Content_Dev_Errors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il campo code di un errore è uno di questi. L’URI type di ogni problema punta alla sua riga qui.`)
};

const nl_content_dev_errors_text = /** @type {(inputs: Content_Dev_Errors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het veld code van een fout is een van deze waarden. De type-URI van elk probleem verwijst naar de bijbehorende rij hier.`)
};

const pl_content_dev_errors_text = /** @type {(inputs: Content_Dev_Errors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pole code błędu ma jedną z tych wartości. URI type każdego problemu wskazuje na jego wiersz tutaj.`)
};

const pt_content_dev_errors_text = /** @type {(inputs: Content_Dev_Errors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O campo code de um erro é um destes. A URI type de cada problema aponta para a linha dele aqui.`)
};

const ru_content_dev_errors_text = /** @type {(inputs: Content_Dev_Errors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поле code ошибки принимает одно из этих значений. URI type каждой проблемы ведёт к её строке здесь.`)
};

const sv_content_dev_errors_text = /** @type {(inputs: Content_Dev_Errors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fältet code i ett fel är ett av dessa. Varje problems type-URI pekar på dess rad här.`)
};

const tr_content_dev_errors_text = /** @type {(inputs: Content_Dev_Errors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir hatanın code alanı bunlardan biridir. Her sorunun type URI’si buradaki satırını gösterir.`)
};

const zh_content_dev_errors_text = /** @type {(inputs: Content_Dev_Errors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`错误的 code 字段取以下值之一。每个问题的 type URI 都指向这里对应的行。`)
};

const ja_content_dev_errors_text = /** @type {(inputs: Content_Dev_Errors_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エラーの code フィールドは次のいずれかです。各問題の type URI はここの該当行を指します。`)
};

/**
* | output |
* | --- |
* | "The code field of an error is one of these. Each problem’s type URI points to its row here." |
*
* @param {Content_Dev_Errors_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_errors_text = /** @type {((inputs?: Content_Dev_Errors_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Errors_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_errors_text(inputs)
	if (locale === "de") return de_content_dev_errors_text(inputs)
	if (locale === "fr") return fr_content_dev_errors_text(inputs)
	if (locale === "it") return it_content_dev_errors_text(inputs)
	if (locale === "nl") return nl_content_dev_errors_text(inputs)
	if (locale === "pl") return pl_content_dev_errors_text(inputs)
	if (locale === "pt") return pt_content_dev_errors_text(inputs)
	if (locale === "ru") return ru_content_dev_errors_text(inputs)
	if (locale === "sv") return sv_content_dev_errors_text(inputs)
	if (locale === "tr") return tr_content_dev_errors_text(inputs)
	if (locale === "zh") return zh_content_dev_errors_text(inputs)
	if (locale === "ja") return ja_content_dev_errors_text(inputs)
	return en_content_dev_errors_text(inputs)
});
