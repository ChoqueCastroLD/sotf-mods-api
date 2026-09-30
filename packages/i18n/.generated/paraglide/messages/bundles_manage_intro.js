/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Bundles_Manage_IntroInputs */

const en_bundles_manage_intro = /** @type {(inputs: Bundles_Manage_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attach one of your kits as an official bundle. Players get every mod of the kit in one zip, rebuilt when an item updates.`)
};

const es_bundles_manage_intro = /** @type {(inputs: Bundles_Manage_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adjunta uno de tus kits como paquete oficial. Los jugadores reciben todos los mods del kit en un zip, que se regenera cuando un elemento se actualiza.`)
};

const de_bundles_manage_intro = /** @type {(inputs: Bundles_Manage_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hänge eines deiner Kits als offizielles Paket an. Spielende erhalten alle Mods des Kits in einer Zip-Datei, die bei Updates neu erstellt wird.`)
};

const fr_bundles_manage_intro = /** @type {(inputs: Bundles_Manage_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Associe un de tes kits comme pack officiel. Les joueurs reçoivent tous les mods du kit dans un zip, régénéré à chaque mise à jour d'un élément.`)
};

const it_bundles_manage_intro = /** @type {(inputs: Bundles_Manage_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collega uno dei tuoi kit come pacchetto ufficiale. I giocatori ricevono tutte le mod del kit in uno zip, rigenerato quando un elemento si aggiorna.`)
};

const nl_bundles_manage_intro = /** @type {(inputs: Bundles_Manage_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koppel een van je kits als officieel pakket. Spelers krijgen alle mods van de kit in één zip, die opnieuw wordt gemaakt als een onderdeel wordt bijgewerkt.`)
};

const pl_bundles_manage_intro = /** @type {(inputs: Bundles_Manage_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dołącz jeden ze swoich zestawów jako oficjalny pakiet. Gracze dostają wszystkie mody zestawu w jednym zipie, odświeżanym po aktualizacji elementu.`)
};

const pt_bundles_manage_intro = /** @type {(inputs: Bundles_Manage_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Associa um dos teus kits como pacote oficial. Os jogadores recebem todos os mods do kit num zip, regenerado quando um item é atualizado.`)
};

const ru_bundles_manage_intro = /** @type {(inputs: Bundles_Manage_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Прикрепите один из своих наборов как официальный. Игроки получат все моды набора одним zip, который пересобирается при обновлении элемента.`)
};

const sv_bundles_manage_intro = /** @type {(inputs: Bundles_Manage_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koppla ett av dina kit som officiellt paket. Spelare får alla moddar i kitet i en zip som byggs om när ett objekt uppdateras.`)
};

const tr_bundles_manage_intro = /** @type {(inputs: Bundles_Manage_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitlerinden birini resmi paket olarak bağla. Oyuncular kitteki tüm modları tek bir zip içinde alır; bir öğe güncellenince zip yeniden oluşturulur.`)
};

const zh_bundles_manage_intro = /** @type {(inputs: Bundles_Manage_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`将你的一个合集附加为官方整合包。玩家可一次获得合集中的所有模组，条目更新时会自动重新生成。`)
};

const ja_bundles_manage_intro = /** @type {(inputs: Bundles_Manage_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自分のキットの 1 つを公式バンドルとして追加します。プレイヤーはキット内のすべての MOD を 1 つの zip で入手でき、項目が更新されると再生成されます。`)
};

/**
* | output |
* | --- |
* | "Attach one of your kits as an official bundle. Players get every mod of the kit in one zip, rebuilt when an item updates." |
*
* @param {Bundles_Manage_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_manage_intro = /** @type {((inputs?: Bundles_Manage_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_Manage_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_manage_intro(inputs)
	if (locale === "de") return de_bundles_manage_intro(inputs)
	if (locale === "fr") return fr_bundles_manage_intro(inputs)
	if (locale === "it") return it_bundles_manage_intro(inputs)
	if (locale === "nl") return nl_bundles_manage_intro(inputs)
	if (locale === "pl") return pl_bundles_manage_intro(inputs)
	if (locale === "pt") return pt_bundles_manage_intro(inputs)
	if (locale === "ru") return ru_bundles_manage_intro(inputs)
	if (locale === "sv") return sv_bundles_manage_intro(inputs)
	if (locale === "tr") return tr_bundles_manage_intro(inputs)
	if (locale === "zh") return zh_bundles_manage_intro(inputs)
	if (locale === "ja") return ja_bundles_manage_intro(inputs)
	return en_bundles_manage_intro(inputs)
});
