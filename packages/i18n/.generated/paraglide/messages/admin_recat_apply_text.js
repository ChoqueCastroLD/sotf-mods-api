/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Apply_TextInputs */

const en_admin_recat_apply_text = /** @type {(inputs: Admin_Recat_Apply_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods move to these categories right away; their pages and the listings refresh within minutes.`)
};

const es_admin_recat_apply_text = /** @type {(inputs: Admin_Recat_Apply_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los mods pasan a estas categorías al instante; sus páginas y los listados se actualizan en unos minutos.`)
};

const de_admin_recat_apply_text = /** @type {(inputs: Admin_Recat_Apply_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Mods wechseln sofort in diese Kategorien; ihre Seiten und die Listen aktualisieren sich innerhalb weniger Minuten.`)
};

const fr_admin_recat_apply_text = /** @type {(inputs: Admin_Recat_Apply_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les mods passent tout de suite dans ces catégories ; leurs pages et les listes se mettent à jour en quelques minutes.`)
};

const it_admin_recat_apply_text = /** @type {(inputs: Admin_Recat_Apply_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le mod passano subito a queste categorie; le loro pagine e gli elenchi si aggiornano in pochi minuti.`)
};

const nl_admin_recat_apply_text = /** @type {(inputs: Admin_Recat_Apply_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De mods gaan meteen naar deze categorieën; hun pagina’s en de lijsten worden binnen enkele minuten bijgewerkt.`)
};

const pl_admin_recat_apply_text = /** @type {(inputs: Admin_Recat_Apply_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody od razu trafią do tych kategorii; ich strony i listy odświeżą się w ciągu kilku minut.`)
};

const pt_admin_recat_apply_text = /** @type {(inputs: Admin_Recat_Apply_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os mods passam para essas categorias na hora; as páginas deles e as listas se atualizam em poucos minutos.`)
};

const ru_admin_recat_apply_text = /** @type {(inputs: Admin_Recat_Apply_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды сразу перейдут в эти категории; их страницы и списки обновятся за несколько минут.`)
};

const sv_admin_recat_apply_text = /** @type {(inputs: Admin_Recat_Apply_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddarna flyttas direkt till de här kategorierna; deras sidor och listorna uppdateras inom några minuter.`)
};

const tr_admin_recat_apply_text = /** @type {(inputs: Admin_Recat_Apply_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlar hemen bu kategorilere geçer; sayfaları ve listeler birkaç dakika içinde güncellenir.`)
};

const zh_admin_recat_apply_text = /** @type {(inputs: Admin_Recat_Apply_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组会立即移到这些分类；其页面和列表会在几分钟内更新。`)
};

const ja_admin_recat_apply_text = /** @type {(inputs: Admin_Recat_Apply_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD はすぐにこれらのカテゴリーに移り、ページと一覧は数分で更新されます。`)
};

/**
* | output |
* | --- |
* | "Mods move to these categories right away; their pages and the listings refresh within minutes." |
*
* @param {Admin_Recat_Apply_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_apply_text = /** @type {((inputs?: Admin_Recat_Apply_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Apply_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_apply_text(inputs)
	if (locale === "de") return de_admin_recat_apply_text(inputs)
	if (locale === "fr") return fr_admin_recat_apply_text(inputs)
	if (locale === "it") return it_admin_recat_apply_text(inputs)
	if (locale === "nl") return nl_admin_recat_apply_text(inputs)
	if (locale === "pl") return pl_admin_recat_apply_text(inputs)
	if (locale === "pt") return pt_admin_recat_apply_text(inputs)
	if (locale === "ru") return ru_admin_recat_apply_text(inputs)
	if (locale === "sv") return sv_admin_recat_apply_text(inputs)
	if (locale === "tr") return tr_admin_recat_apply_text(inputs)
	if (locale === "zh") return zh_admin_recat_apply_text(inputs)
	if (locale === "ja") return ja_admin_recat_apply_text(inputs)
	return en_admin_recat_apply_text(inputs)
});
