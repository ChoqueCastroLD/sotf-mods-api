/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_404_TextInputs */

const en_shell_404_text = /** @type {(inputs: Shell_404_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This page does not exist or was moved. Check the address or search for what you need.`)
};

const es_shell_404_text = /** @type {(inputs: Shell_404_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta página no existe o se ha movido. Revisa la dirección o busca lo que necesitas.`)
};

const de_shell_404_text = /** @type {(inputs: Shell_404_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Seite existiert nicht oder wurde verschoben. Prüfe die Adresse oder suche nach dem, was du brauchst.`)
};

const fr_shell_404_text = /** @type {(inputs: Shell_404_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette page n’existe pas ou a été déplacée. Vérifiez l’adresse ou recherchez ce dont vous avez besoin.`)
};

const it_shell_404_text = /** @type {(inputs: Shell_404_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa pagina non esiste o è stata spostata. Controlla l’indirizzo o cerca ciò che ti serve.`)
};

const nl_shell_404_text = /** @type {(inputs: Shell_404_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze pagina bestaat niet of is verplaatst. Controleer het adres of zoek wat je nodig hebt.`)
};

const pl_shell_404_text = /** @type {(inputs: Shell_404_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta strona nie istnieje lub została przeniesiona. Sprawdź adres lub wyszukaj to, czego potrzebujesz.`)
};

const pt_shell_404_text = /** @type {(inputs: Shell_404_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta página não existe ou foi movida. Confira o endereço ou busque o que você precisa.`)
};

const ru_shell_404_text = /** @type {(inputs: Shell_404_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Такой страницы нет, или она была перемещена. Проверьте адрес или воспользуйтесь поиском.`)
};

const sv_shell_404_text = /** @type {(inputs: Shell_404_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sidan finns inte eller har flyttats. Kontrollera adressen eller sök efter det du behöver.`)
};

const tr_shell_404_text = /** @type {(inputs: Shell_404_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sayfa mevcut değil veya taşınmış. Adresi kontrol edin ya da ihtiyacınız olanı arayın.`)
};

const zh_shell_404_text = /** @type {(inputs: Shell_404_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此页面不存在或已移动。请检查地址，或搜索你需要的内容。`)
};

const ja_shell_404_text = /** @type {(inputs: Shell_404_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このページは存在しないか、移動されました。アドレスを確認するか、必要なものを検索してください。`)
};

/**
* | output |
* | --- |
* | "This page does not exist or was moved. Check the address or search for what you need." |
*
* @param {Shell_404_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_404_text = /** @type {((inputs?: Shell_404_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_404_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_404_text(inputs)
	if (locale === "de") return de_shell_404_text(inputs)
	if (locale === "fr") return fr_shell_404_text(inputs)
	if (locale === "it") return it_shell_404_text(inputs)
	if (locale === "nl") return nl_shell_404_text(inputs)
	if (locale === "pl") return pl_shell_404_text(inputs)
	if (locale === "pt") return pt_shell_404_text(inputs)
	if (locale === "ru") return ru_shell_404_text(inputs)
	if (locale === "sv") return sv_shell_404_text(inputs)
	if (locale === "tr") return tr_shell_404_text(inputs)
	if (locale === "zh") return zh_shell_404_text(inputs)
	if (locale === "ja") return ja_shell_404_text(inputs)
	return en_shell_404_text(inputs)
});
