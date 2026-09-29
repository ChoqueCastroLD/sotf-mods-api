/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Not_Found_DetailInputs */

const en_errors_code_not_found_detail = /** @type {(inputs: Errors_Code_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We couldn’t find what you asked for. It may have been moved or deleted.`)
};

const es_errors_code_not_found_detail = /** @type {(inputs: Errors_Code_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No encontramos lo que buscabas. Puede que se haya movido o eliminado.`)
};

const de_errors_code_not_found_detail = /** @type {(inputs: Errors_Code_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wir haben nicht gefunden, wonach du suchst. Es wurde vielleicht verschoben oder gelöscht.`)
};

const fr_errors_code_not_found_detail = /** @type {(inputs: Errors_Code_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nous n’avons pas trouvé ce que vous cherchez. Il a peut-être été déplacé ou supprimé.`)
};

const it_errors_code_not_found_detail = /** @type {(inputs: Errors_Code_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non abbiamo trovato quello che cercavi. Potrebbe essere stato spostato o eliminato.`)
};

const nl_errors_code_not_found_detail = /** @type {(inputs: Errors_Code_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We konden niet vinden wat je zocht. Misschien is het verplaatst of verwijderd.`)
};

const pl_errors_code_not_found_detail = /** @type {(inputs: Errors_Code_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie znaleźliśmy tego, czego szukasz. Mogło zostać przeniesione lub usunięte.`)
};

const pt_errors_code_not_found_detail = /** @type {(inputs: Errors_Code_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não encontramos o que você procurava. Pode ter sido movido ou excluído.`)
};

const ru_errors_code_not_found_detail = /** @type {(inputs: Errors_Code_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мы не нашли то, что вы ищете. Возможно, это перенесли или удалили.`)
};

const sv_errors_code_not_found_detail = /** @type {(inputs: Errors_Code_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vi hittade inte det du letade efter. Det kan ha flyttats eller tagits bort.`)
};

const tr_errors_code_not_found_detail = /** @type {(inputs: Errors_Code_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aradığın şeyi bulamadık. Taşınmış ya da silinmiş olabilir.`)
};

const zh_errors_code_not_found_detail = /** @type {(inputs: Errors_Code_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我们没有找到你要的内容，它可能已被移动或删除。`)
};

const ja_errors_code_not_found_detail = /** @type {(inputs: Errors_Code_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`お探しのものが見つかりませんでした。移動または削除された可能性があります。`)
};

/**
* | output |
* | --- |
* | "We couldn’t find what you asked for. It may have been moved or deleted." |
*
* @param {Errors_Code_Not_Found_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_not_found_detail = /** @type {((inputs?: Errors_Code_Not_Found_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Not_Found_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_not_found_detail(inputs)
	if (locale === "de") return de_errors_code_not_found_detail(inputs)
	if (locale === "fr") return fr_errors_code_not_found_detail(inputs)
	if (locale === "it") return it_errors_code_not_found_detail(inputs)
	if (locale === "nl") return nl_errors_code_not_found_detail(inputs)
	if (locale === "pl") return pl_errors_code_not_found_detail(inputs)
	if (locale === "pt") return pt_errors_code_not_found_detail(inputs)
	if (locale === "ru") return ru_errors_code_not_found_detail(inputs)
	if (locale === "sv") return sv_errors_code_not_found_detail(inputs)
	if (locale === "tr") return tr_errors_code_not_found_detail(inputs)
	if (locale === "zh") return zh_errors_code_not_found_detail(inputs)
	if (locale === "ja") return ja_errors_code_not_found_detail(inputs)
	return en_errors_code_not_found_detail(inputs)
});
