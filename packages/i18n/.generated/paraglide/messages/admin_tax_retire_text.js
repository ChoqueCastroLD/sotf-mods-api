/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Tax_Retire_TextInputs */

const en_admin_tax_retire_text = /** @type {(inputs: Admin_Tax_Retire_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("en", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`No published mod uses it. Retired categories disappear from menus; their pages redirect through the legacy slugs.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} published mod still uses it: move it first. Retired categories disappear from menus; their pages redirect through the legacy slugs.`);
	return /** @type {LocalizedString} */ (`${count__number} published mods still use it: move them first. Retired categories disappear from menus; their pages redirect through the legacy slugs.`)
	
};

const es_admin_tax_retire_text = /** @type {(inputs: Admin_Tax_Retire_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("es", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Ningún mod publicado la usa. Las categorías retiradas desaparecen de los menús; sus páginas redirigen mediante los slugs antiguos.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Aún la usa ${count__number} mod publicado: muévelo antes. Las categorías retiradas desaparecen de los menús; sus páginas redirigen mediante los slugs antiguos.`);
	return /** @type {LocalizedString} */ (`Aún la usan ${count__number} mods publicados: muévelos antes. Las categorías retiradas desaparecen de los menús; sus páginas redirigen mediante los slugs antiguos.`)
	
};

const de_admin_tax_retire_text = /** @type {(inputs: Admin_Tax_Retire_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("de", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Kein veröffentlichter Mod nutzt sie. Stillgelegte Kategorien verschwinden aus den Menüs; ihre Seiten leiten über die alten Slugs weiter.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} veröffentlichter Mod nutzt sie noch: verschiebe ihn zuerst. Stillgelegte Kategorien verschwinden aus den Menüs; ihre Seiten leiten über die alten Slugs weiter.`);
	return /** @type {LocalizedString} */ (`${count__number} veröffentlichte Mods nutzen sie noch: verschiebe sie zuerst. Stillgelegte Kategorien verschwinden aus den Menüs; ihre Seiten leiten über die alten Slugs weiter.`)
	
};

const fr_admin_tax_retire_text = /** @type {(inputs: Admin_Tax_Retire_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("fr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Aucun mod publié ne l’utilise. Les catégories retirées disparaissent des menus ; leurs pages redirigent via les anciens slugs.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod publié l’utilise encore : déplacez-le d’abord. Les catégories retirées disparaissent des menus ; leurs pages redirigent via les anciens slugs.`);
	return /** @type {LocalizedString} */ (`${count__number} mods publiés l’utilisent encore : déplacez-les d’abord. Les catégories retirées disparaissent des menus ; leurs pages redirigent via les anciens slugs.`)
	
};

const it_admin_tax_retire_text = /** @type {(inputs: Admin_Tax_Retire_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("it", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nessuna mod pubblicata la usa. Le categorie ritirate spariscono dai menu; le loro pagine reindirizzano tramite i vecchi slug.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod pubblicata la usa ancora: spostala prima. Le categorie ritirate spariscono dai menu; le loro pagine reindirizzano tramite i vecchi slug.`);
	return /** @type {LocalizedString} */ (`${count__number} mod pubblicate la usano ancora: spostale prima. Le categorie ritirate spariscono dai menu; le loro pagine reindirizzano tramite i vecchi slug.`)
	
};

const nl_admin_tax_retire_text = /** @type {(inputs: Admin_Tax_Retire_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("nl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Geen enkele gepubliceerde mod gebruikt haar. Ingetrokken categorieën verdwijnen uit de menu’s; hun pagina’s leiden om via de oude slugs.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} gepubliceerde mod gebruikt haar nog: verplaats die eerst. Ingetrokken categorieën verdwijnen uit de menu’s; hun pagina’s leiden om via de oude slugs.`);
	return /** @type {LocalizedString} */ (`${count__number} gepubliceerde mods gebruiken haar nog: verplaats die eerst. Ingetrokken categorieën verdwijnen uit de menu’s; hun pagina’s leiden om via de oude slugs.`)
	
};

const pl_admin_tax_retire_text = /** @type {(inputs: Admin_Tax_Retire_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nie używa jej żaden opublikowany mod. Wycofane kategorie znikają z menu; ich strony przekierowują przez stare slugi.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Wciąż używa jej ${count__number} opublikowany mod: najpierw go przenieś. Wycofane kategorie znikają z menu; ich strony przekierowują przez stare slugi.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Wciąż używają jej ${count__number} opublikowane mody: najpierw je przenieś. Wycofane kategorie znikają z menu; ich strony przekierowują przez stare slugi.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Wciąż używa jej ${count__number} opublikowanych modów: najpierw je przenieś. Wycofane kategorie znikają z menu; ich strony przekierowują przez stare slugi.`);
	return /** @type {LocalizedString} */ (`Wciąż używa jej ${count__number} opublikowanego modu: najpierw go przenieś. Wycofane kategorie znikają z menu; ich strony przekierowują przez stare slugi.`)
	
};

const pt_admin_tax_retire_text = /** @type {(inputs: Admin_Tax_Retire_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pt", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nenhum mod publicado a usa. Categorias aposentadas somem dos menus; as páginas delas redirecionam pelos slugs antigos.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod publicado ainda a usa: mova-o antes. Categorias aposentadas somem dos menus; as páginas delas redirecionam pelos slugs antigos.`);
	return /** @type {LocalizedString} */ (`${count__number} mods publicados ainda a usam: mova-os antes. Categorias aposentadas somem dos menus; as páginas delas redirecionam pelos slugs antigos.`)
	
};

const ru_admin_tax_retire_text = /** @type {(inputs: Admin_Tax_Retire_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ru", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Её не использует ни один опубликованный мод. Выведенные категории пропадают из меню; их страницы перенаправляют по старым слагам.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Её ещё использует ${count__number} опубликованный мод: сначала перенесите его. Выведенные категории пропадают из меню; их страницы перенаправляют по старым слагам.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Её ещё используют ${count__number} опубликованных мода: сначала перенесите их. Выведенные категории пропадают из меню; их страницы перенаправляют по старым слагам.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Её ещё используют ${count__number} опубликованных модов: сначала перенесите их. Выведенные категории пропадают из меню; их страницы перенаправляют по старым слагам.`);
	return /** @type {LocalizedString} */ (`Её ещё используют ${count__number} опубликованного мода: сначала перенесите их. Выведенные категории пропадают из меню; их страницы перенаправляют по старым слагам.`)
	
};

const sv_admin_tax_retire_text = /** @type {(inputs: Admin_Tax_Retire_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("sv", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Ingen publicerad modd använder den. Pensionerade kategorier försvinner ur menyerna; deras sidor omdirigerar via de gamla sluggarna.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} publicerad modd använder den fortfarande: flytta den först. Pensionerade kategorier försvinner ur menyerna; deras sidor omdirigerar via de gamla sluggarna.`);
	return /** @type {LocalizedString} */ (`${count__number} publicerade moddar använder den fortfarande: flytta dem först. Pensionerade kategorier försvinner ur menyerna; deras sidor omdirigerar via de gamla sluggarna.`)
	
};

const tr_admin_tax_retire_text = /** @type {(inputs: Admin_Tax_Retire_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("tr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Yayındaki hiçbir mod bunu kullanmıyor. Emekli kategoriler menülerden kaybolur; sayfaları eski slug’lar üzerinden yönlendirilir.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Yayındaki ${count__number} mod hâlâ bunu kullanıyor: önce onu taşı. Emekli kategoriler menülerden kaybolur; sayfaları eski slug’lar üzerinden yönlendirilir.`);
	return /** @type {LocalizedString} */ (`Yayındaki ${count__number} mod hâlâ bunu kullanıyor: önce onları taşı. Emekli kategoriler menülerden kaybolur; sayfaları eski slug’lar üzerinden yönlendirilir.`)
	
};

const zh_admin_tax_retire_text = /** @type {(inputs: Admin_Tax_Retire_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("zh", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`没有已发布的模组在使用它。 已停用的分类会从菜单中消失；其页面通过旧 slug 重定向。`);
	return /** @type {LocalizedString} */ (`仍有 ${count__number} 个已发布的模组在使用它：请先迁移。 已停用的分类会从菜单中消失；其页面通过旧 slug 重定向。`)
	
};

const ja_admin_tax_retire_text = /** @type {(inputs: Admin_Tax_Retire_TextInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ja", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`公開中の MOD は使っていません。 引退したカテゴリーはメニューから消え、ページは旧スラッグ経由でリダイレクトされます。`);
	return /** @type {LocalizedString} */ (`公開中の MOD ${count__number} 件がまだ使っています。先に移動してください。 引退したカテゴリーはメニューから消え、ページは旧スラッグ経由でリダイレクトされます。`)
	
};

/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "No published mod uses it. Retired categories disappear from menus; their pages redirect through the legacy slugs." |
* | * | "one" | "{count__number} published mod still uses it: move it first. Retired categories disappear from menus; their pages redirect through the legacy slugs." |
* | * | * | "{count__number} published mods still use it: move them first. Retired categories disappear from menus; their pages redirect through the legacy slugs." |
*
* @param {Admin_Tax_Retire_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_retire_text = /** @type {((inputs: Admin_Tax_Retire_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Retire_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_retire_text(inputs)
	if (locale === "de") return de_admin_tax_retire_text(inputs)
	if (locale === "fr") return fr_admin_tax_retire_text(inputs)
	if (locale === "it") return it_admin_tax_retire_text(inputs)
	if (locale === "nl") return nl_admin_tax_retire_text(inputs)
	if (locale === "pl") return pl_admin_tax_retire_text(inputs)
	if (locale === "pt") return pt_admin_tax_retire_text(inputs)
	if (locale === "ru") return ru_admin_tax_retire_text(inputs)
	if (locale === "sv") return sv_admin_tax_retire_text(inputs)
	if (locale === "tr") return tr_admin_tax_retire_text(inputs)
	if (locale === "zh") return zh_admin_tax_retire_text(inputs)
	if (locale === "ja") return ja_admin_tax_retire_text(inputs)
	return en_admin_tax_retire_text(inputs)
});
