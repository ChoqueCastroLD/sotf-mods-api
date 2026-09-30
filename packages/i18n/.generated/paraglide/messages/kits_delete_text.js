/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Delete_TextInputs */

const en_kits_delete_text = /** @type {(inputs: Kits_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The kit, its code and its links stop working for everyone. This can’t be undone.`)
};

const es_kits_delete_text = /** @type {(inputs: Kits_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El kit, su código y sus enlaces dejarán de funcionar para todo el mundo. No se puede deshacer.`)
};

const de_kits_delete_text = /** @type {(inputs: Kits_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Kit, sein Code und seine Links funktionieren dann für niemanden mehr. Das lässt sich nicht rückgängig machen.`)
};

const fr_kits_delete_text = /** @type {(inputs: Kits_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le kit, son code et ses liens cesseront de fonctionner pour tout le monde. Cette action est irréversible.`)
};

const it_kits_delete_text = /** @type {(inputs: Kits_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il kit, il suo codice e i suoi link smetteranno di funzionare per tutti. Non si può annullare.`)
};

const nl_kits_delete_text = /** @type {(inputs: Kits_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De kit, de code en de links werken dan voor niemand meer. Dit kan niet ongedaan worden gemaakt.`)
};

const pl_kits_delete_text = /** @type {(inputs: Kits_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zestaw, jego kod i linki przestaną działać dla wszystkich. Tego nie można cofnąć.`)
};

const pt_kits_delete_text = /** @type {(inputs: Kits_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O kit, o código e os links deixarão de funcionar para todos. Não dá para desfazer.`)
};

const ru_kits_delete_text = /** @type {(inputs: Kits_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Набор, его код и ссылки перестанут работать для всех. Это нельзя отменить.`)
};

const sv_kits_delete_text = /** @type {(inputs: Kits_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitet, koden och länkarna slutar fungera för alla. Det går inte att ångra.`)
};

const tr_kits_delete_text = /** @type {(inputs: Kits_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit, kodu ve bağlantıları herkes için çalışmaz hâle gelir. Bu işlem geri alınamaz.`)
};

const zh_kits_delete_text = /** @type {(inputs: Kits_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`套装、代码和链接将对所有人失效，且无法撤销。`)
};

const ja_kits_delete_text = /** @type {(inputs: Kits_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットとそのコード、リンクはすべての人に対して無効になります。元に戻せません。`)
};

/**
* | output |
* | --- |
* | "The kit, its code and its links stop working for everyone. This can’t be undone." |
*
* @param {Kits_Delete_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_delete_text = /** @type {((inputs?: Kits_Delete_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Delete_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_delete_text(inputs)
	if (locale === "de") return de_kits_delete_text(inputs)
	if (locale === "fr") return fr_kits_delete_text(inputs)
	if (locale === "it") return it_kits_delete_text(inputs)
	if (locale === "nl") return nl_kits_delete_text(inputs)
	if (locale === "pl") return pl_kits_delete_text(inputs)
	if (locale === "pt") return pt_kits_delete_text(inputs)
	if (locale === "ru") return ru_kits_delete_text(inputs)
	if (locale === "sv") return sv_kits_delete_text(inputs)
	if (locale === "tr") return tr_kits_delete_text(inputs)
	if (locale === "zh") return zh_kits_delete_text(inputs)
	if (locale === "ja") return ja_kits_delete_text(inputs)
	return en_kits_delete_text(inputs)
});
