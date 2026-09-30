/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Block_Wrong_TypeInputs */

const en_upload_block_wrong_type = /** @type {(inputs: Upload_Block_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wrong file type. Choose the file type shown in the drop area.`)
};

const es_upload_block_wrong_type = /** @type {(inputs: Upload_Block_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo de archivo incorrecto. Elige el tipo indicado en la zona de arrastre.`)
};

const de_upload_block_wrong_type = /** @type {(inputs: Upload_Block_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falscher Dateityp. Wähle den im Ablagebereich angezeigten Typ.`)
};

const fr_upload_block_wrong_type = /** @type {(inputs: Upload_Block_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mauvais type de fichier. Choisissez le type indiqué dans la zone de dépôt.`)
};

const it_upload_block_wrong_type = /** @type {(inputs: Upload_Block_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo di file errato. Scegli il tipo indicato nell’area di rilascio.`)
};

const nl_upload_block_wrong_type = /** @type {(inputs: Upload_Block_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verkeerd bestandstype. Kies het type dat in het sleepvak staat.`)
};

const pl_upload_block_wrong_type = /** @type {(inputs: Upload_Block_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zły typ pliku. Wybierz typ podany w polu upuszczania.`)
};

const pt_upload_block_wrong_type = /** @type {(inputs: Upload_Block_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo de arquivo errado. Escolha o tipo indicado na área de soltar.`)
};

const ru_upload_block_wrong_type = /** @type {(inputs: Upload_Block_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Неверный тип файла. Выберите тип, указанный в области загрузки.`)
};

const sv_upload_block_wrong_type = /** @type {(inputs: Upload_Block_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fel filtyp. Välj typen som visas i släppytan.`)
};

const tr_upload_block_wrong_type = /** @type {(inputs: Upload_Block_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanlış dosya türü. Bırakma alanında gösterilen türü seç.`)
};

const zh_upload_block_wrong_type = /** @type {(inputs: Upload_Block_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件类型不正确。请选择拖放区显示的类型。`)
};

const ja_upload_block_wrong_type = /** @type {(inputs: Upload_Block_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイル形式が違います。ドロップエリアに表示されている形式を選んでください。`)
};

/**
* | output |
* | --- |
* | "Wrong file type. Choose the file type shown in the drop area." |
*
* @param {Upload_Block_Wrong_TypeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_block_wrong_type = /** @type {((inputs?: Upload_Block_Wrong_TypeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Block_Wrong_TypeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_block_wrong_type(inputs)
	if (locale === "de") return de_upload_block_wrong_type(inputs)
	if (locale === "fr") return fr_upload_block_wrong_type(inputs)
	if (locale === "it") return it_upload_block_wrong_type(inputs)
	if (locale === "nl") return nl_upload_block_wrong_type(inputs)
	if (locale === "pl") return pl_upload_block_wrong_type(inputs)
	if (locale === "pt") return pt_upload_block_wrong_type(inputs)
	if (locale === "ru") return ru_upload_block_wrong_type(inputs)
	if (locale === "sv") return sv_upload_block_wrong_type(inputs)
	if (locale === "tr") return tr_upload_block_wrong_type(inputs)
	if (locale === "zh") return zh_upload_block_wrong_type(inputs)
	if (locale === "ja") return ja_upload_block_wrong_type(inputs)
	return en_upload_block_wrong_type(inputs)
});
