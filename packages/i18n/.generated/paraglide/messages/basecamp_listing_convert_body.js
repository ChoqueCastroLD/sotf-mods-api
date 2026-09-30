/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_Convert_BodyInputs */

const en_basecamp_listing_convert_body = /** @type {(inputs: Basecamp_Listing_Convert_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raw HTML will show as plain text from now on. There is no way back.`)
};

const es_basecamp_listing_convert_body = /** @type {(inputs: Basecamp_Listing_Convert_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El HTML en bruto se mostrará como texto plano a partir de ahora. No hay vuelta atrás.`)
};

const de_basecamp_listing_convert_body = /** @type {(inputs: Basecamp_Listing_Convert_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rohes HTML wird ab jetzt als Text angezeigt. Es gibt keinen Weg zurück.`)
};

const fr_basecamp_listing_convert_body = /** @type {(inputs: Basecamp_Listing_Convert_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le HTML brut s'affichera désormais comme du texte. Il n'y a pas de retour en arrière.`)
};

const it_basecamp_listing_convert_body = /** @type {(inputs: Basecamp_Listing_Convert_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L'HTML grezzo verrà mostrato come testo semplice da ora in poi. Non si può tornare indietro.`)
};

const nl_basecamp_listing_convert_body = /** @type {(inputs: Basecamp_Listing_Convert_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ruwe HTML wordt voortaan als gewone tekst getoond. Er is geen weg terug.`)
};

const pl_basecamp_listing_convert_body = /** @type {(inputs: Basecamp_Listing_Convert_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Surowy HTML będzie od teraz wyświetlany jako zwykły tekst. Nie ma powrotu.`)
};

const pt_basecamp_listing_convert_body = /** @type {(inputs: Basecamp_Listing_Convert_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O HTML bruto será exibido como texto simples a partir de agora. Não há volta.`)
};

const ru_basecamp_listing_convert_body = /** @type {(inputs: Basecamp_Listing_Convert_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Необработанный HTML теперь будет показан как обычный текст. Пути назад нет.`)
};

const sv_basecamp_listing_convert_body = /** @type {(inputs: Basecamp_Listing_Convert_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rå HTML visas från och med nu som vanlig text. Det går inte att ångra.`)
};

const tr_basecamp_listing_convert_body = /** @type {(inputs: Basecamp_Listing_Convert_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ham HTML artık düz metin olarak görünecek. Geri dönüş yok.`)
};

const zh_basecamp_listing_convert_body = /** @type {(inputs: Basecamp_Listing_Convert_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原始 HTML 此后将显示为纯文本，且无法恢复。`)
};

const ja_basecamp_listing_convert_body = /** @type {(inputs: Basecamp_Listing_Convert_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`生のHTMLは今後プレーンテキストとして表示されます。元には戻せません。`)
};

/**
* | output |
* | --- |
* | "Raw HTML will show as plain text from now on. There is no way back." |
*
* @param {Basecamp_Listing_Convert_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_convert_body = /** @type {((inputs?: Basecamp_Listing_Convert_BodyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Convert_BodyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_convert_body(inputs)
	if (locale === "de") return de_basecamp_listing_convert_body(inputs)
	if (locale === "fr") return fr_basecamp_listing_convert_body(inputs)
	if (locale === "it") return it_basecamp_listing_convert_body(inputs)
	if (locale === "nl") return nl_basecamp_listing_convert_body(inputs)
	if (locale === "pl") return pl_basecamp_listing_convert_body(inputs)
	if (locale === "pt") return pt_basecamp_listing_convert_body(inputs)
	if (locale === "ru") return ru_basecamp_listing_convert_body(inputs)
	if (locale === "sv") return sv_basecamp_listing_convert_body(inputs)
	if (locale === "tr") return tr_basecamp_listing_convert_body(inputs)
	if (locale === "zh") return zh_basecamp_listing_convert_body(inputs)
	if (locale === "ja") return ja_basecamp_listing_convert_body(inputs)
	return en_basecamp_listing_convert_body(inputs)
});
